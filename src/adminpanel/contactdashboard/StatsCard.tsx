interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}
const StatsCard = ({ title, value, icon }: StatsCardProps) => {
  return (
    <div className="stats-card">
      <div className="stats-icon">{icon}</div>
      <div className="stats-info">
        <h3>{value}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default StatsCard;