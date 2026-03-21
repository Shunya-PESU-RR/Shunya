import React from 'react';
import './ReflectiveCard.css';
import { Fingerprint, Activity, Lock } from 'lucide-react';

interface ReflectiveCardProps {
  className?: string;
  style?: React.CSSProperties;
  name?: string;
  role?: string;
  id?: string;
  image?: string;
}

const ReflectiveCard: React.FC<ReflectiveCardProps> = ({
  className = '',
  style = {},
  name = 'ALEXANDER DOE',
  role = 'SENIOR DEVELOPER',
  id = '8901-2345-6789',
  image
}) => {
  return (
    <div className={`reflective-card-container ${className}`} style={style}>
      {image && (
        <img
          src={image}
          alt={name}
          className="reflective-photo"
          loading="lazy"
          width={320}
          height={500}
        />
      )}

      <div className="reflective-content">
        <div className="card-header">
          <Activity className="status-icon" size={20} />
        </div>

        <div className="card-body">
          <div className="user-info">
            <h2 className="user-name">{name.toUpperCase()}</h2>
            <p className="user-role">{role.toUpperCase()}</p>
          </div>
        </div>

        <div className="card-footer">
          <div className="id-section">
            <span className="label">MEMBER ID</span>
            <span className="value">{id}</span>
          </div>
          <div className="fingerprint-section">
            <Fingerprint size={32} className="fingerprint-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReflectiveCard;
