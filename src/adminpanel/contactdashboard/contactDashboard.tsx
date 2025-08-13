import { useEffect, useState } from 'react';
import { supabase } from '../../supabase/Supabase';
import styles from './contactDashboard.module.css';
import StatsCard from './StatsCard';
import { FaUsers, FaCalendarWeek, FaCalendarAlt, FaIndustry } from 'react-icons/fa';

interface Contact {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  project_type: string;
  message: string;
}

interface Stats {
  total: number;
  weekly: number;
  monthly: number;
  projectTypes: Record<string, number>;
}

const ContactDashboard = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [stats, setStats] = useState<Stats>({
    total: 0,
    weekly: 0,
    monthly: 0,
    projectTypes: {},
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const calculateStats = (contacts: Contact[]) => {
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const projectTypes: Record<string, number> = {};
    let weeklyCount = 0;
    let monthlyCount = 0;

    contacts.forEach((contact) => {
      const contactDate = new Date(contact.created_at);
      
      // Count project types
      projectTypes[contact.project_type] = (projectTypes[contact.project_type] || 0) + 1;
      
      // Count weekly contacts
      if (contactDate >= oneWeekAgo) {
        weeklyCount++;
      }
      
      // Count monthly contacts
      if (contactDate >= oneMonthAgo) {
        monthlyCount++;
      }
    });

    setStats({
      total: contacts.length,
      weekly: weeklyCount,
      monthly: monthlyCount,
      projectTypes,
    });
  };

  const fetchContacts = async () => {
    try {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setContacts(data || []);
      calculateStats(data || []);
    } catch (err) {
      setError('Failed to fetch contacts');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.title}>Contact Dashboard</h1>

      <div className={styles.statsGrid}>
        <StatsCard
          title="Total Contacts"
          value={stats.total}
          icon={<FaUsers />}
        />
        <StatsCard
          title="This Week"
          value={stats.weekly}
          icon={<FaCalendarWeek />}
        />
        <StatsCard
          title="This Month"
          value={stats.monthly}
          icon={<FaCalendarAlt />}
        />
        <StatsCard
          title="Most Common Project"
          value={Object.entries(stats.projectTypes).reduce((a, b) => 
            a[1] > b[1] ? a : b, ['', 0])[0]}
          icon={<FaIndustry />}
        />
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.contactTable}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Project Type</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{new Date(contact.created_at).toLocaleDateString()}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.project_type}</td>
                <td>
                  <div className={styles.messageCell}>
                    {contact.message}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactDashboard;