import React from 'react';
import GlassCard from './GlassCard';
import { Github, Linkedin, Mail } from 'lucide-react';

interface TeamMemberProps {
    name: string;
    role: string;
    image: string;
    socials?: {
        github?: string;
        linkedin?: string;
        email?: string;
    };
}

export default function TeamMemberCard({ name, role, image, socials }: TeamMemberProps) {
    return (
        <GlassCard className="group text-center !p-8" hoverEffect={false}>
            <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                <img
                    src={image}
                    alt={name}
                    className="relative w-full h-full object-cover rounded-full border-2 border-white/20 group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            <h3 className="text-xl font-bold mb-1">{name}</h3>
            <div className="text-sm font-medium text-blue-500 mb-6">{role}</div>

            <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {socials?.github && (
                    <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-purple-500 transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                )}
                {socials?.linkedin && (
                    <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-purple-500 transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                )}
                {socials?.email && (
                    <a href={`mailto:${socials.email}`} className="text-muted hover:text-purple-500 transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                )}
            </div>
        </GlassCard>
    );
}
