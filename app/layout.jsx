import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Prompt Swap",
  description: "Discover and share AI-Powered prompts",
  icons: {
    icon: "favicon/favicon.ico",
    apple: "favicon/apple-touch-icon.png",
    android: "favicon/android-chrome-192x192.png",
    chrome: "favicon/android-chrome-512x512.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="favicon" href="/favicon/favicon.ico" />
      </head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
