"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  UserCircle,
  MessageSquare,
  Compass,
  Users,
  Settings,
  Plus,
} from "lucide-react";

const navItems = [
  { Icon: Home, href: "/" },
  { Icon: UserCircle, href: "/profile" },
  { Icon: MessageSquare, href: "/messages" },
  { Icon: Compass, href: "/explore" },
  { Icon: Users, href: "/followers" },
  { Icon: Settings, href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      style={{
        position: "fixed",
        top: "50%",
        left: 0,
        transform: "translateY(-50%)",
        width: "5rem",
        backgroundColor: "#E9D5FF",
        borderTopRightRadius: "1.5rem",
        borderBottomRightRadius: "1.5rem",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        zIndex: 50,
      }}
    >
      {/* Menu Icons */}
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          color: "#1e3a8a",
          width: "100%",
        }}
      >
        {navItems.map(({ Icon, href }) => {
          const isActive = pathname === href;

          return (
            <Link key={href} href={href} passHref legacyBehavior>
              <a
                style={{
                  backgroundColor: isActive ? "white" : "transparent",
                  padding: "0.75rem",
                  borderRadius: "0.75rem",
                  marginBottom: "0",
                  boxShadow: isActive ? "0 1px 2px rgba(0, 0, 0, 0.1)" : "none",
                  display: "flex",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  color: isActive ? "#1e3a8a" : "#1e3a8a",
                  width: "100%",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    e.currentTarget.style.backgroundColor = "white";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    e.currentTarget.style.backgroundColor = "transparent";
                }}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon style={{ width: "1.5rem", height: "1.5rem" }} />
              </a>
            </Link>
          );
        })}

        {/* Post Button */}
        <Link href="/compose/post" passHref>
          <div
            style={{
              marginTop: "2rem",
              backgroundColor: "#1e3a8a",
              color: "white",
              padding: "0.75rem",
              borderRadius: "0.75rem",
              boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#374151")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#1e3a8a")
            }
            title="Post"
          >
            <Plus style={{ width: "1.5rem", height: "1.5rem" }} />
          </div>
        </Link>
      </nav>
    </aside>
  );
}
