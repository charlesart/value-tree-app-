# Value Tree App - Project Roadmap

## Vision
An interactive encyclopedia of value creation levers for professionals. A visual, navigable knowledge base with rich, sourced content for each value lever.

---

## Current State (Completed)
- [x] Interactive tree visualization (Revenue, Cost, Process)
- [x] Pan, zoom, expand/collapse functionality
- [x] Side panel on double-click
- [x] Edit mode with PIN protection
- [x] Inline editing of titles and descriptions
- [x] Basic rich text editor for summaries
- [x] localStorage persistence
- [x] Responsive design (mobile/desktop)
- [x] Tree switching between Revenue/Cost/Process

---

## Phase 1: Enhanced Content Structure (Frontend)

### 1.1 Redesign Side Panel Content Sections
Each node needs structured content with these sections:

```
├── Title & Description (existing)
├── Contribution to Value
│   └── How this lever impacts value creation
├── Diagnostic & Implementation
│   ├── Key questions to assess current state
│   ├── Implementation steps
│   └── Common pitfalls
├── Logical Operator Flow
│   └── Visual flowchart/decision tree
├── Case Examples
│   ├── Company/situation
│   ├── Actions taken
│   └── Results achieved
└── Sources & References
    └── Citations with links
```

### 1.2 Side Panel UI Updates
- [ ] Tabbed interface within side panel (Overview | Diagnostic | Cases | Sources)
- [ ] Expand side panel to ~50% width for content reading
- [ ] Collapsible sections within each tab
- [ ] "Full screen" mode for deep reading

### 1.3 Rich Content Editor Enhancements
- [ ] Section templates (pre-built structure for each content type)
- [ ] Table support for diagnostic frameworks
- [ ] Flowchart/diagram embedding (Mermaid.js or similar)
- [ ] Citation/reference manager
- [ ] Image upload (not just URL)
- [ ] Video embed support

### 1.4 Content Data Structure
```javascript
{
  id: 'price-increase',
  title: 'Price Increase',
  description: 'Direct price adjustments',
  content: {
    overview: '<html content>',
    contributionToValue: '<html content>',
    diagnostic: {
      keyQuestions: ['...'],
      implementationSteps: ['...'],
      pitfalls: ['...']
    },
    logicalFlow: '<mermaid diagram or html>',
    caseExamples: [
      {
        company: 'Example Corp',
        situation: '...',
        actions: '...',
        results: '...',
        source: { title: '', url: '', date: '' }
      }
    ],
    sources: [
      { title: '', author: '', url: '', date: '', type: 'article|book|study' }
    ]
  },
  metadata: {
    lastUpdated: 'ISO date',
    updatedBy: 'user_id',
    status: 'draft|review|published'
  }
}
```

---

## Phase 2: Backend Development

### 2.1 Technology Stack (Recommended)
```
Frontend:        Current (vanilla JS) or migrate to React/Vue
Backend:         Node.js + Express  OR  Python + FastAPI
Database:        PostgreSQL (structured) + optional MongoDB (content)
Authentication:  Auth0 or Firebase Auth (simplest)
File Storage:    AWS S3 or Cloudflare R2 (images, attachments)
Hosting:         Vercel (frontend) + Railway/Render (backend)
```

### 2.2 API Endpoints Needed
```
Authentication:
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/me

Trees:
GET    /api/trees                    # List all trees
GET    /api/trees/:id                # Get full tree with content
PUT    /api/trees/:id                # Update tree structure

Nodes:
GET    /api/nodes/:id                # Get node content
PUT    /api/nodes/:id                # Update node content
GET    /api/nodes/:id/history        # Version history

Content:
POST   /api/upload                   # Upload images/files
GET    /api/sources                  # List all sources/citations

Users (Admin):
GET    /api/users                    # List users
PUT    /api/users/:id/role           # Change permissions
```

### 2.3 User Roles & Permissions
```
Viewer:     Can view all content, navigate trees
Editor:     Can edit content (changes go to review)
Publisher:  Can approve/publish content changes
Admin:      Full access, user management
```

### 2.4 Database Schema (Core Tables)
```sql
users (id, email, name, role, created_at)
trees (id, name, slug, description, structure_json, created_at, updated_at)
nodes (id, tree_id, node_key, title, description, content_json, status, updated_by, updated_at)
node_versions (id, node_id, content_json, changed_by, changed_at, change_note)
sources (id, title, author, url, publication_date, type)
node_sources (node_id, source_id, context_note)
media (id, filename, url, uploaded_by, uploaded_at)
```

---

## Phase 3: Content Creation & Population

### 3.1 Content Templates
Create standardized templates for consistency:
- [ ] Overview template
- [ ] Diagnostic framework template
- [ ] Case study template
- [ ] Source citation format

### 3.2 Priority Content (Start Here)
Focus on high-value, frequently-referenced levers first:

**Revenue Tree - Priority Nodes:**
1. Price Increase → List Price, Reduce Discounts
2. New Customers → Lead Generation, Conversion Rate
3. Existing Customers → Retention, Upsell, Cross-sell

**Cost Tree - Priority Nodes:**
1. COGS → Materials, Labor
2. SG&A → Sales Costs, Marketing

**Process Tree - Priority Nodes:**
1. Automation → Manual Processes, RPA
2. Quality → Defect Reduction

### 3.3 Content Sources to Research
- Harvard Business Review
- McKinsey Insights
- Bain & Company publications
- Company 10-K filings (case examples)
- Academic journals (strategic management)

---

## Phase 4: Public Deployment

### 4.1 Hosting Setup
- [ ] Domain registration (valuecreationtree.com or similar)
- [ ] SSL certificate (automatic with most hosts)
- [ ] CDN for static assets
- [ ] Database hosting (managed PostgreSQL)

### 4.2 Deployment Pipeline
```
GitHub repo
    ↓
Push to main branch
    ↓
CI/CD (GitHub Actions)
    ↓
├── Frontend → Vercel/Netlify (auto-deploy)
└── Backend → Railway/Render (auto-deploy)
    ↓
Production site live
```

### 4.3 Pre-Launch Checklist
- [ ] SEO meta tags for each node
- [ ] Open Graph tags for social sharing
- [ ] Analytics (Google Analytics or Plausible)
- [ ] Error tracking (Sentry)
- [ ] Backup strategy for database
- [ ] Rate limiting on API
- [ ] CORS configuration

---

## Phase 5: Polish & Advanced Features

### 5.1 User Experience
- [ ] Search across all content
- [ ] Keyboard navigation
- [ ] Bookmarks/favorites
- [ ] Reading progress tracking
- [ ] Print-friendly view
- [ ] Export to PDF

### 5.2 Engagement Features
- [ ] Comments/discussion on nodes
- [ ] "Suggest an edit" for viewers
- [ ] Newsletter signup
- [ ] Related nodes suggestions

### 5.3 Advanced Visualization
- [ ] Compare levers side-by-side
- [ ] Custom tree views (filter by industry, etc.)
- [ ] Impact calculator (interactive)

---

## Immediate Next Steps (This Week)

1. **Frontend: Redesign side panel** with tabbed sections for the new content structure
2. **Frontend: Update data model** to support rich content sections
3. **Decision: Choose backend stack** (recommend Node.js + PostgreSQL for simplicity)
4. **Setup: Create GitHub repository** for version control
5. **Content: Write first complete node** as template (suggest: "Price Increase")

---

## Timeline Estimate

| Phase | Duration | Dependencies |
|-------|----------|--------------|
| Phase 1: Enhanced Frontend | 2-3 weeks | None |
| Phase 2: Backend Development | 3-4 weeks | Phase 1 design decisions |
| Phase 3: Content Creation | Ongoing | Phase 1 complete |
| Phase 4: Deployment | 1 week | Phase 2 complete |
| Phase 5: Polish | Ongoing | Phase 4 complete |

**MVP Target: 6-8 weeks** (basic backend + 10-15 fully populated nodes)

---

## Decisions Made

1. **Authentication**: Public viewing (no login). Only admin (you) can edit.
2. **Content workflow**: Direct publish for now. AI review workflow optional later.
3. **Collaboration**: Single author for now.
4. **Monetization**: Free viewing + paid downloads + optional ads (see Phase 6)
5. **Branding**: TBD - need short domain name

---

## Phase 6: Monetization (Optional)

### 6.1 Paid Downloads
- [ ] "Download as PDF" button on each node
- [ ] Free preview (first section only) vs paid full content
- [ ] Payment integration (Stripe recommended)
- [ ] Pricing tiers:
  - Single node PDF: $2-5
  - Full tree bundle (all nodes): $20-50
  - All trees complete package: $75-100
- [ ] User accounts for download history (optional)

### 6.2 Advertising
- [ ] Ad placement zones (sidebar, between sections)
- [ ] Google AdSense integration OR
- [ ] Direct sponsor placements (more lucrative, relevant)
- [ ] "Sponsored case study" format for B2B
- [ ] Ad-free option for paying users

### 6.3 Payment Infrastructure
```
Stripe integration:
- One-time payments for downloads
- No subscriptions needed initially
- Webhook for delivery confirmation
- PDF generation on purchase (server-side)
```

---

## Phase 7: AI-Assisted Workflow (Optional)

### 7.1 AI Content Review
- [ ] Pre-publish AI check for:
  - Factual consistency
  - Citation verification (are links valid?)
  - Readability scoring
  - Completeness (all sections filled?)
  - Tone/style consistency
- [ ] Suggestions panel before publish

### 7.2 AI Content Generation Assist
- [ ] "Draft from sources" - paste articles, generate initial content
- [ ] "Expand section" - AI elaborates on bullet points
- [ ] "Find case studies" - AI searches for relevant examples
- [ ] "Summarize for overview" - condense detailed content

### 7.3 AI Implementation
```
Option A: OpenAI API (GPT-4)
- Best quality
- ~$0.01-0.03 per review
- Easy integration

Option B: Claude API (Anthropic)
- Great for long content
- Similar pricing
- Good at citations

Option C: Self-hosted (Ollama + Llama)
- Free after setup
- Requires GPU server
- Lower quality
```

---

## Domain Name Ideas

Short options to check availability:
- vcp.io (Value Creation Platform)
- vlev.io (Value Levers)
- vtree.io (Value Tree)
- valt.io (Value Alternative)
- valr.io (Value + R)
- lever.so
- vnode.io
- vcmap.io (Value Creation Map)
- val.vc
- createval.io

**Action:** Check availability at Namecheap, Porkbun, or Google Domains

---

## Files in This Project

```
value-tree-app/
├── index.html          # Main HTML structure
├── styles.css          # All styling
├── script.js           # All JavaScript logic
├── ROADMAP.md          # This file
└── (future)
    ├── /api            # Backend code
    ├── /components     # If migrating to React
    └── /content        # Markdown/JSON content files
```

---

*Last updated: January 2025*
