'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function MainNav() {
    const pathname = usePathname();

    return (
        <nav>
            <ul>
                <li>
                    <Link
                        className={`link ${pathname === '/' ? 'active' : ''}`}
                        href="/"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className={`link ${
                            pathname === '/chaos' ? 'active' : ''
                        }`}
                        href="/chaos"
                    >
                        Chaos
                    </Link>
                </li>
            </ul>
        </nav>
    );
}