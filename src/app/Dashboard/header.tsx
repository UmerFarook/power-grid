'use client';
import React, { useState } from 'react';

type NavItem = { label: string; href: string };

interface HeaderProps {
    title?: string;
    nav?: NavItem[];
    onSearch?: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ title = 'My App', nav = [], onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSearch) onSearch(query);
    };

    return (
        <header style={{ borderBottom: '1px solid #eaeaea', padding: '12px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ fontWeight: 700, fontSize: 18 }}>
                    <a href="/" aria-label={title} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {title}
                    </a>
                </div>

                <nav aria-label="Primary navigation" style={{ flex: 1 }}>
                    <ul style={{ display: 'flex', gap: 12, listStyle: 'none', margin: 0, padding: 0 }}>
                        {nav.map((item) => (
                            <li key={item.href}>
                                <a href={item.href} style={{ textDecoration: 'none', color: '#0366d6' }}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <form onSubmit={handleSubmit} role="search" style={{ display: 'flex', gap: 8 }}>
                    <input
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search..."
                        aria-label="Search"
                        style={{ padding: '6px 8px' }}
                    />
                    <button type="submit" style={{ padding: '6px 10px' }}>
                        Search
                    </button>
                </form>
            </div>
        </header>
    );
};

export default Header;