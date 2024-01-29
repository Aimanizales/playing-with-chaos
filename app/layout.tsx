export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <title>playing with Chaos</title>
                <meta charSet="utf-8" />
            </head>
            <body>
                <header>
                    <h1>Playing with Chaos</h1>
                    <nav>
                        <ul></ul>
                    </nav>
                </header>
                <main>{children}</main>
            </body>
        </html>
    );
}
