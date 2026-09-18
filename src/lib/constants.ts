export const APP_NAME = "PropertyHub"
export const APP_DESCRIPTION = "Real Estate Management Platform"

export const SIDEBAR_NAV = [
  {
    section: "Overview",
    items: [
      { name: "Dashboard", href: "/dashboard", icon: "📊" },
      { name: "Analytics", href: "/dashboard/analytics", icon: "📈" },
    ],
  },
  {
    section: "Properties",
    items: [
      { name: "Listings", href: "/dashboard/listings", icon: "🏠" },
      { name: "Property Details", href: "/dashboard/property-details", icon: "📋" },
      { name: "Virtual Tours", href: "/dashboard/virtual-tours", icon: "🎥" },
      { name: "Documents", href: "/dashboard/documents", icon: "📄" },
    ],
  },
  {
    section: "Sales",
    items: [
      { name: "Leads", href: "/dashboard/leads", icon: "🎯" },
      { name: "Tours", href: "/dashboard/tours", icon: "🗓️" },
      { name: "Offers", href: "/dashboard/offers", icon: "🤝" },
      { name: "Transactions", href: "/dashboard/transactions", icon: "💰" },
    ],
  },
  {
    section: "People",
    items: [
      { name: "Clients", href: "/dashboard/clients", icon: "👥" },
      { name: "Agents", href: "/dashboard/agents", icon: "👨‍💼" },
      { name: "Teams", href: "/dashboard/teams", icon: "🏢" },
    ],
  },
  {
    section: "Marketing",
    items: [
      { name: "Campaigns", href: "/dashboard/campaigns", icon: "📢" },
      { name: "Neighborhoods", href: "/dashboard/neighborhoods", icon: "🏘️" },
      { name: "Commissions", href: "/dashboard/commissions", icon: "💵" },
    ],
  },
  {
    section: "Platform",
    items: [
      { name: "Team", href: "/dashboard/team", icon: "👥" },
      { name: "API", href: "/dashboard/api", icon: "🔑" },
      { name: "Billing", href: "/dashboard/billing", icon: "💳" },
      { name: "Settings", href: "/dashboard/settings", icon: "⚙️" },
    ],
  },
]

export const PROPERTY_STATUSES = ["Active", "Pending", "Sold", "Withdrawn", "Expired"] as const
export const PROPERTY_TYPES = ["Single Family", "Condo", "Townhouse", "Multi-Family", "Land", "Commercial"] as const
export const LEAD_STATUSES = ["New", "Contacted", "Qualified", "Negotiating", "Converted", "Lost"] as const

export const CHART_COLORS = [
  "#22c55e",
  "#8b5cf6",
  "#3b82f6",
  "#f59e0b",
  "#ef4444",
  "#ec4899",
  "#14b8a6",
  "#6366f1",
]
