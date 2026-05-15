import React from "react";
import {
  Activity,
  Bell,
  Briefcase,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  CircleUserRound,
  Clock3,
  FileText,
  Filter,
  Home,
  Image as ImageIcon,
  Layers,
  Lock,
  MailCheck,
  MapPin,
  Menu,
  MessageSquare,
  Mic,
  MoreHorizontal,
  Paperclip,
  PenLine,
  Phone,
  PhoneCall,
  PhoneMissed,
  Play,
  Search,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Store,
  Tag,
  UserCircle,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: Home },
  { label: "Profile", icon: UserCircle },
  { label: "Lead Manager", icon: MessageSquare, active: true },
  { label: "BuyLeads", icon: Activity, badge: "41" },
  { label: "Products", icon: ShoppingCart },
  { label: "Photos & Docs", icon: ImageIcon },
  { label: "Invoices", icon: FileText },
  { label: "Buyer Tools", icon: Briefcase, hot: "New" },
  { label: "Settings", icon: Settings },
];

const contacts = [
  {
    name: "Ethnicity",
    city: "Rupnagar, Punjab",
    note: "Yes Reverse Printing Lamination Inks is available",
    product: "Reverse Printing Lamination Inks",
    time: "Yesterday",
    tags: ["whatsapp", "tag"],
  },
  {
    name: "Akshu Enterprises",
    city: "Dehradun, Uttarakhand",
    note: "Call attempted for Flexo Gravure Inks - incoming",
    product: "Flexo Gravure Inks",
    time: "13 May",
    selected: true,
  },
  {
    name: "Pascolan",
    city: "Noida, Uttar Pradesh",
    note: "Missed call",
    product: "",
    time: "12 May",
    tags: ["orange"],
  },
  {
    name: "Pasculm Pvt .Ltd",
    city: "Ghaziabad, Uttar Pradesh",
    note: "Hi SAURABH, We have received your enquiry on IndiaMAR...",
    product: "",
    time: "12 May",
  },
];

const quickActions = [
  { label: "Share more details", icon: MessageSquare },
  { label: "Introduction", icon: MessageSquare },
  { label: "Catalog Link", icon: MessageSquare },
  { label: "Share Video", icon: Play, red: true },
  { label: "Share PDF", icon: FileText, pdf: true },
  { label: "Send Quotation", icon: FileText, pdf: true },
];

const products = [
  {
    name: "High Bond Lamination Inks",
    art: "ink-pack",
  },
  {
    name: "Reverse Printing Lamination Inks",
    art: "boxes",
  },
  {
    name: "High Gloss Printing Inks",
    art: "cans",
  },
];

function TopBar() {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="brand-mark">M</div>
        <div className="brand-name">indiamart</div>
      </div>

      <div className="global-search">
        <button className="lead-select">
          Buy Leads <ChevronDown size={16} />
        </button>
        <input placeholder="Enter product / service to search" />
        <button className="search-button">
          <Search size={23} /> Search
        </button>
      </div>

      <button className="buy-button">Buy With IndiaMART</button>

      <nav className="top-links">
        <TopLink icon={MessageSquare} label="Lead Manager" />
        <TopLink icon={Activity} label="BuyLeads" alert="41" />
        <TopLink icon={ShoppingCart} label="Products" />
        <TopLink icon={Briefcase} label="MSME Loans" />
        <TopLink icon={CircleHelp} label="Help" />
        <div className="top-profile">
          <CircleUserRound size={19} />
          <span>Hi Rajendra</span>
          <ChevronDown size={13} />
        </div>
      </nav>
    </header>
  );
}

function TopLink({ icon: Icon, label, alert }) {
  return (
    <div className="top-link">
      <div className="top-icon-wrap">
        <Icon size={20} />
        {alert && <span className="alert-dot">{alert}</span>}
      </div>
      <span>{label}</span>
    </div>
  );
}

function SideNav() {
  return (
    <aside className="sidenav">
      {navItems.map(({ label, icon: Icon, active, badge, hot }) => (
        <button className={`side-item ${active ? "active" : ""}`} key={label}>
          <span className="side-icon">
            <Icon size={22} strokeWidth={2.2} />
            {badge && <span className="side-badge">{badge}</span>}
            {hot && <span className="hot-badge">{hot}</span>}
          </span>
          <span>{label}</span>
        </button>
      ))}
    </aside>
  );
}

function ContactPane() {
  return (
    <section className="contact-pane">
      <div className="contact-search-row">
        <button className="hamburger">
          <Menu size={31} />
        </button>
        <div className="contact-search">
          <Search size={28} />
          <span />
          <input placeholder="Name, Product, City, Company, Mobile" />
        </div>
        <button className="filter-button">
          <Filter size={29} />
        </button>
      </div>

      <div className="contact-tabs">
        <button className="contacts-title">
          All Contacts (670) <ChevronDown size={18} />
        </button>
        <button className="reminders">
          <Clock3 size={19} /> Reminders
        </button>
      </div>

      <div className="chips-row">
        <button className="chip reply">Reply Now</button>
        <button className="chip">Unread <span>0</span></button>
        <button className="chip">Fresh <span>0</span></button>
        <button className="date-filter">Activity Date <ChevronDown size={15} /></button>
      </div>

      <div className="contact-list">
        <div className="date-group">
          <button>Semi Gloss Ink</button>
          <span>Yesterday</span>
        </div>
        {contacts.map((contact) => (
          <ContactRow contact={contact} key={contact.name} />
        ))}
      </div>
      <button className="jump-up">↑</button>
    </section>
  );
}

function ContactRow({ contact }) {
  return (
    <article className={`contact-row ${contact.selected ? "selected" : ""}`}>
      <div className="contact-main">
        <div className="contact-name">
          <strong>{contact.name}</strong>
          {contact.tags?.includes("whatsapp") && <MessageSquare size={16} className="teal-icon" />}
          {contact.tags?.includes("tag") && <Tag size={16} className="blue-icon" fill="#4a88e8" />}
          {contact.tags?.includes("orange") && <Tag size={17} className="orange-icon" fill="#f39a00" />}
        </div>
        <div className="contact-city">{contact.city}</div>
        <div className="contact-note">{contact.note}</div>
        {contact.product && <button className="product-pill">{contact.product}</button>}
      </div>
      <time>{contact.time}</time>
    </article>
  );
}

function Conversation() {
  return (
    <main className="conversation">
      <section className="lead-header">
        <div className="lead-info">
          <div>
            <strong>Akanksha Ramrane</strong>
            <span>last seen Wed, 04:19 PM</span>
          </div>
          <div className="lead-meta">
            <span><Store size={16} /> Akshu Enterpris...</span>
            <span><MapPin size={17} /> Dehradun, Uttarak...</span>
            <span><ShieldCheck size={17} /> 06396464456</span>
            <span><MailCheck size={19} /></span>
          </div>
        </div>
        <div className="lead-actions">
          <button><Layers size={23} /></button>
          <button className="call-action"><PhoneCall size={24} /></button>
          <button className="view-more">View<br />More</button>
          <span className="red-notice" />
        </div>
      </section>

      <section className="chat-area">
        <div className="timeline-note">Contact added through Call Enquiry received</div>
        <div className="incoming-card">
          <ProductImage variant="boxes" />
          <div className="incoming-text">
            <p>Call attempted for Reverse<br />Printing Lamination Inks on<br />+917942641065</p>
            <div className="incoming-bottom">
              <span className="phone-bubble"><PhoneMissed size={19} /></span>
              <time>11 May, 2:07 PM</time>
            </div>
          </div>
        </div>

        <article className="message-card">
          <MoreHorizontal size={22} className="message-menu" />
          <p className="greeting-text">Hi Akanksha,</p>
          <p>
            We have received your enquiry on IndiaMART for Reverse Printing Lamination
            Inks.<br />Please confirm to proceed.
          </p>
          <p>Enquiry Details: (Location: Dehradun)</p>
          <p>
            For reference, you may view the product details here:<br />
            <a href="#">https://www.indiamart.com/formulae-inksnoida/lamination-inks.html</a>
          </p>
        </article>
      </section>

      <Composer />
    </main>
  );
}

function Composer() {
  return (
    <footer className="composer">
      <div className="quick-row">
        <button className="small-nav muted"><MessageSquare size={24} /></button>
        <button className="small-nav"><ChevronLeft size={31} /></button>
        <div className="quick-actions">
          {quickActions.map(({ label, icon: Icon, red, pdf }) => (
            <button className="quick-chip" key={label}>
              <span className={`${red ? "play-badge" : pdf ? "pdf-badge" : "whatsapp-mini"}`}>
                <Icon size={red ? 13 : pdf ? 13 : 15} fill={red || pdf ? "currentColor" : "none"} />
              </span>
              {label}
            </button>
          ))}
        </div>
        <button className="small-nav"><ChevronRight size={31} /></button>
      </div>

      <div className="product-strip">
        {products.map((product) => (
          <article className="product-card" key={product.name}>
            <ProductImage variant={product.art} compact />
            <span>{product.name}</span>
            <MessageSquare size={19} className="product-whatsapp" />
            <button><PenLine size={20} /></button>
          </article>
        ))}
        <button className="view-all-products">
          <Store size={22} />
          <span>View All</span>
        </button>
      </div>

      <div className="message-input">
        <Store size={22} className="shop-icon" />
        <div className="input-shell">
          <Lock size={22} />
          <span>Send a WhatsApp template to start conversation.</span>
          <a href="#">Learn more</a>
        </div>
        <button><PenLine size={21} /></button>
        <button><FileText size={21} /></button>
        <button><Paperclip size={23} /></button>
        <button className="mic"><Mic size={22} /></button>
      </div>
    </footer>
  );
}

function ProductImage({ variant, compact = false }) {
  return (
    <div className={`product-image ${variant} ${compact ? "compact" : ""}`}>
      <span />
      <span />
      <span />
      <b />
    </div>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <TopBar />
      <div className="body-shell">
        <SideNav />
        <ContactPane />
        <Conversation />
      </div>
    </div>
  );
}
