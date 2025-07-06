"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../supabase/Supabase";
import styles from "./contactDashboard.module.css";

interface Contact {
  phone: string;
  id: string;
  created_at: string;
  name: string;
  email: string;
  project_type: string;
  message: string;
}

const ContactDashboard = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Contact | null;
    direction: "asc" | "desc";
  }>({ key: "created_at", direction: "desc" });

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const { data, error } = await supabase
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setContacts(data || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleSort = (key: keyof Contact) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === "asc"
          ? "desc"
          : "asc",
    });
  };

  const sortedContacts = [...contacts].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const filteredContacts = sortedContacts.filter((contact) => {
    if (filter === "all") return true;
    return contact.project_type.toLowerCase() === filter.toLowerCase();
  });

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1>Contact Submissions Dashboard</h1>
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <h3>Total</h3>
            <p>{contacts.length}</p>
          </div>
          <div className={styles.statCard}>
            <h3>Commercial</h3>
            <p>
              {contacts.filter((c) => c.project_type === "Commercial").length}
            </p>
          </div>
          <div className={styles.statCard}>
            <h3>Residential</h3>
            <p>
              {contacts.filter((c) => c.project_type === "Residential").length}
            </p>
          </div>
          <div className={styles.statCard}>
            <h3>Industrial</h3>
            <p>
              {contacts.filter((c) => c.project_type === "Industrial").length}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.tableControls}>
        <div className={styles.filters}>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="all">All Projects</option>
            <option value="commercial">Commercial</option>
            <option value="residential">Residential</option>
            <option value="industrial">Industrial</option>
          </select>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th onClick={() => handleSort("name")}>
                Name{" "}
                {sortConfig.key === "name" &&
                  (sortConfig.direction === "asc" ? "↑" : "↓")}
              </th>
              <th onClick={() => handleSort("phone")}>
                Phone No.{" "}
                {sortConfig.key === "email" &&
                  (sortConfig.direction === "asc" ? "↑" : "↓")}
              </th>
              <th onClick={() => handleSort("email")}>
                Email{" "}
                {sortConfig.key === "email" &&
                  (sortConfig.direction === "asc" ? "↑" : "↓")}
              </th>
              <th onClick={() => handleSort("project_type")}>
                Project Type{" "}
                {sortConfig.key === "project_type" &&
                  (sortConfig.direction === "asc" ? "↑" : "↓")}
              </th>
              <th onClick={() => handleSort("created_at")}>
                Date{" "}
                {sortConfig.key === "created_at" &&
                  (sortConfig.direction === "asc" ? "↑" : "↓")}
              </th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td>
                  <span
                    className={`${styles.badge} ${
                      styles[contact.project_type.toLowerCase()]
                    }`}
                  >
                    {contact.project_type}
                  </span>
                </td>
                <td>{formatDate(contact.created_at)}</td>
                <td>
                  <div className={styles.messageCell}>{contact.message}</div>
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
