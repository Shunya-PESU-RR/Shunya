import React from 'react';
import { Link } from "react-router-dom";
import GlassCard from './GlassCard';

interface EventCardProps {
    title: string;
    date: string;
    description: string;
    type: 'hackathon' | 'workshop' | 'talk' | 'math event';
    image: string;
    link?: string;
    isPast?: boolean;
}

export default function EventCard({ title, date, description, type, image, link, isPast = false }: EventCardProps) {
    const typeColors = {
        hackathon: 'text-blue-500',
        workshop: 'text-emerald-500',
        talk: 'text-amber-500',
        'math event': 'text-purple-500'
    };

    const card = (
        <GlassCard className={`group cursor-pointer h-full flex flex-col ${isPast ? 'opacity-80 hover:opacity-100' : ''}`}>
            <div className="h-48 rounded-xl mb-6 group-hover:scale-[1.02] transition-transform duration-500 relative overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover rounded-xl" loading="lazy" width={400} height={192} />
                {/* Overlay for type */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-bold text-white uppercase tracking-wider">
                    {type}
                </div>
            </div>

            <div className={`text-sm font-medium mb-2 ${typeColors[type]}`}>{date}</div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">{title}</h3>
            <p className="text-muted text-sm leading-relaxed flex-grow">{description}</p>

            {link && (
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <span className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Details <span className="text-lg">→</span>
                    </span>
                </div>
            )}
        </GlassCard>
    );

    if (!link) return card;

    return (
        <Link to={link} aria-label={`View ${title} details`} className="block">
            {card}
        </Link>
    );
}
