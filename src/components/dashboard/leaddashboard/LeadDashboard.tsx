"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/supabase/Supabase";
import styles from "./leaddashoboard.module.css";

interface Quote {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  project_type: string;
  requirements: string;
  status: string;
}

const LeadDashboard = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Quote | null;
    direction: "asc" | "desc";
  }>({ key: "created_at", direction: "desc" });

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const { data, error } = await supabase
        .from("quotes")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setQuotes(data || []);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
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

  const handleSort = (key: keyof Quote) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === "asc"
          ? "desc"
          : "asc",
    });
  };

  const sortedQuotes = [...quotes].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const filteredQuotes = sortedQuotes.filter((quote) => {
    if (filter === "all") return true;
    return quote.project_type.toLowerCase() === filter.toLowerCase();
  });

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1>Quote Requests Dashboard</h1>
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <h3>Total Quotes</h3>
            <p>{quotes.length}</p>
          </div>
          <div className={styles.statCard}>
            <h3>Commercial</h3>
            <p>
              {quotes.filter((q) => q.project_type === "Commercial").length}
            </p>
          </div>
          <div className={styles.statCard}>
            <h3>Residential</h3>
            <p>
              {quotes.filter((q) => q.project_type === "Residential").length}
            </p>
          </div>
          <div className={styles.statCard}>
            <h3>Industrial</h3>
            <p>
              {quotes.filter((q) => q.project_type === "Industrial").length}
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
                {sortConfig.key === "phone" &&
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
              <th>Requirements</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredQuotes.map((quote) => (
              <tr key={quote.id}>
                <td>{quote.name}</td>
                <td>{quote.phone}</td>
                <td>{quote.email}</td>
                <td>
                  <span
                    className={`${styles.badge} ${
                      styles[quote.project_type.toLowerCase()]
                    }`}
                  >
                    {quote.project_type}
                  </span>
                </td>
                <td>{formatDate(quote.created_at)}</td>
                <td>
                  <div className={styles.messageCell}>{quote.requirements}</div>
                </td>
                <td>
                  <span
                    className={`${styles.badge} ${styles[quote.status.toLowerCase()]}`}
                  >
                    {quote.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadDashboard;