import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Chaos',
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <aside>
                <ul>
                    <li>1. sample</li>
                    <li>2. Sierpinski</li>
                </ul>
            </aside>
            <section>{children}</section>
        </div>
    );
}
