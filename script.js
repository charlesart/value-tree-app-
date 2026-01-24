// ==================== DATA STRUCTURES ====================

// Empty content template for nodes
function createEmptyContent() {
    return {
        overview: '',
        contributionToValue: '',
        diagnostic: {
            keyQuestions: [],
            implementationSteps: [],
            pitfalls: []
        },
        logicalFlow: '',
        caseExamples: [],
        sources: []
    };
}

// Default Revenue Tree Data
const defaultRevenueTree = {
    id: 'revenue',
    title: 'Revenue Value Creation',
    description: 'Primary growth levers',
    content: createEmptyContent(),
    level: 'root',
    children: [
        {
            id: 'price',
            title: 'Price',
            description: 'What you charge',
            content: createEmptyContent(),
            level: 1,
            children: [
                {
                    id: 'pricing-strategy',
                    title: 'Pricing Strategy',
                    description: 'What price to charge',
                    content: createEmptyContent(),
                    level: 2,
                    children: [
                        {
                            id: 'cost-based',
                            title: 'Cost-Based',
                            description: 'Cost plus, Target return',
                            content: {
                                overview: 'Cost-based pricing sets prices by adding a markup to the cost of producing a product or service. Two main approaches: (1) Cost-Plus Pricing adds a fixed percentage margin to total costs, and (2) Target Return Pricing sets price to achieve a specific ROI on invested capital. This is the simplest pricing method but often leaves money on the table by ignoring customer willingness-to-pay.',
                                contributionToValue: 'Ensures baseline profitability on every unit sold. Provides pricing floor and margin protection. Most useful for commoditized products, cost-plus contracts (government, construction), or when cost structures are complex and value is hard to quantify. However, rarely maximizes value—typically captures only 30-50% of potential margin vs. value-based approaches.',
                                diagnostic: {
                                    keyQuestions: [
                                        'What is our fully-loaded cost per unit (materials, labor, overhead, delivery)?',
                                        'What target margin or ROI do we need to justify the investment?',
                                        'How do our costs compare to competitors? Are we cost-advantaged or disadvantaged?',
                                        'Is the market commoditized enough that cost-plus is appropriate, or are we leaving value on the table?',
                                        'Do we have accurate cost allocation across products/services?'
                                    ],
                                    implementationSteps: [
                                        'Calculate fully-loaded unit cost (direct + allocated indirect costs)',
                                        'Determine target margin based on required ROI or industry benchmarks',
                                        'Set price = Cost × (1 + Markup%) or Price = Cost + (Investment × Target ROI / Volume)',
                                        'Validate against market prices—if significantly above, re-examine costs or value proposition',
                                        'Build in cost escalation clauses for long-term contracts'
                                    ],
                                    pitfalls: [
                                        'Ignores customer willingness-to-pay—may underprice differentiated offerings',
                                        'Cost allocation errors cascade into pricing errors',
                                        'Creates "cost-plus culture" that reduces pressure to control costs',
                                        'Vulnerable to competitors with lower cost structures',
                                        'Doesn\'t account for demand elasticity or competitive dynamics'
                                    ]
                                },
                                logicalFlow: 'Identify all costs → Allocate to units → Add target margin → Set price → Validate vs. market → Adjust if needed',
                                caseExamples: [
                                    {
                                        company: 'Defense Contractors',
                                        situation: 'Government contracts often mandate cost-plus pricing with audited costs and fixed margins (typically 8-15%)',
                                        result: 'Guaranteed profitability but limited upside; incentivizes cost inflation rather than efficiency'
                                    },
                                    {
                                        company: 'Construction Industry',
                                        situation: 'Bid projects using cost estimates plus markup (10-20% typical)',
                                        result: 'Standard practice but sophisticated firms layer in value-based elements for differentiated capabilities'
                                    },
                                    {
                                        company: 'Commodity Manufacturing',
                                        situation: 'Steel, chemicals, basic components where differentiation is minimal',
                                        result: 'Cost-plus is appropriate here—focus shifts to cost reduction as the profit lever'
                                    }
                                ]
                            },
                            level: 3
                        },
                        { id: 'value-based', title: 'Value-Based', description: 'Economic value, Perceived value, WTP research', content: createEmptyContent(), level: 3 },
                        { id: 'competition-based', title: 'Competition-Based', description: 'Premium, Parity, Penetration', content: createEmptyContent(), level: 3 }
                    ]
                },
                {
                    id: 'price-realization',
                    title: 'Price Realization',
                    description: 'Actually getting that price',
                    content: createEmptyContent(),
                    level: 2,
                    children: [
                        { id: 'price-architecture', title: 'Price Architecture', description: 'Good-Better-Best, Usage-based, Subscription', content: createEmptyContent(), level: 3 },
                        { id: 'price-execution', title: 'Price Execution', description: 'Discount controls, Deal approval, Sales enablement', content: createEmptyContent(), level: 3 },
                        { id: 'price-monitoring', title: 'Price Monitoring', description: 'Invoice → Pocket price, Identify leakage, Margin tracking', content: createEmptyContent(), level: 3 }
                    ]
                }
            ]
        },
        {
            id: 'volume',
            title: 'Volume',
            description: 'Units sold (highest leverage)',
            content: createEmptyContent(),
            level: 1,
            children: [
                {
                    id: 'retention-expansion',
                    title: 'Retention & Expansion',
                    description: 'Tier 1: 5-25x ROI vs acquisition',
                    content: createEmptyContent(),
                    level: 2,
                    children: [
                        { id: 'retention', title: 'Retention', description: '5% increase = 25-95% profit lift', content: createEmptyContent(), level: 3 },
                        { id: 'expansion-revenue', title: 'Expansion Revenue', description: 'Upsell/cross-sell (60-70% success rate)', content: createEmptyContent(), level: 3 },
                        { id: 'loyalty-programs', title: 'Loyalty Programs', description: '4.9x ROI, 84% higher stickiness', content: createEmptyContent(), level: 3 }
                    ]
                },
                {
                    id: 'new-customer-acquisition',
                    title: 'New Acquisition',
                    description: 'Tier 3: Necessary but 5-25x costlier',
                    content: createEmptyContent(),
                    level: 2,
                    children: [
                        { id: 'lead-nurturing', title: 'Lead Nurturing', description: '451% conversion lift with automation', content: createEmptyContent(), level: 3 },
                        { id: 'funnel-optimization', title: 'Funnel Optimization', description: 'Only 2.3% of leads convert', content: createEmptyContent(), level: 3 },
                        { id: 'referral-programs', title: 'Referral Programs', description: '30-50% lower CAC', content: createEmptyContent(), level: 3 }
                    ]
                },
                {
                    id: 'market-penetration',
                    title: 'Market Penetration',
                    description: 'Tier 2: Max value from current markets',
                    content: createEmptyContent(),
                    level: 2,
                    children: [
                        { id: 'market-share', title: 'Market Share Gains', description: 'Market power, efficiency, quality signaling', content: createEmptyContent(), level: 3 },
                        { id: 'distribution-expansion', title: 'Distribution Expansion', description: '3x growth multiplier, 71% top firms use 4+ channels', content: createEmptyContent(), level: 3 },
                        { id: 'geographic-expansion', title: 'Geographic Expansion', description: 'TAM extension, risk diversification', content: createEmptyContent(), level: 3 }
                    ]
                }
            ]
        },
        {
            id: 'mix',
            title: 'Mix',
            description: 'Composition shift (silent profit multiplier)',
            content: createEmptyContent(),
            level: 1,
            children: [
                {
                    id: 'product-mix',
                    title: 'Product Mix',
                    description: 'What you sell (SKU composition)',
                    content: createEmptyContent(),
                    level: 2,
                    children: [
                        { id: 'sku-rationalization', title: 'SKU Rationalization', description: '80% profit from 20% of SKUs', content: createEmptyContent(), level: 3 },
                        { id: 'premium-tiering', title: 'Premium Tiering', description: 'Good-Better-Best, feature gates', content: createEmptyContent(), level: 3 },
                        { id: 'bundling-strategy', title: 'Bundling Strategy', description: 'Increase perceived value & attachment', content: createEmptyContent(), level: 3 }
                    ]
                },
                {
                    id: 'customer-mix',
                    title: 'Customer Mix',
                    description: 'Who you sell to (segment composition)',
                    content: createEmptyContent(),
                    level: 2,
                    children: [
                        { id: 'segment-profitability', title: 'Segment Profitability', description: 'SMB 12%, Mid-Mkt 36%, Enterprise 35%', content: createEmptyContent(), level: 3 },
                        { id: 'upmarket-migration', title: 'Upmarket Migration', description: 'SMB → Mid-Market → Enterprise', content: createEmptyContent(), level: 3 },
                        { id: 'cost-to-serve', title: 'Cost-to-Serve', description: '15-50% varies by segment', content: createEmptyContent(), level: 3 }
                    ]
                },
                {
                    id: 'channel-mix',
                    title: 'Channel Mix',
                    description: 'How you reach them (go-to-market)',
                    content: createEmptyContent(),
                    level: 2,
                    children: [
                        { id: 'direct-sales', title: 'Direct Sales', description: 'Highest margin, highest LTV', content: createEmptyContent(), level: 3 },
                        { id: 'product-led-growth', title: 'Product-Led Growth', description: 'Lowest CAC, self-serve scale', content: createEmptyContent(), level: 3 },
                        { id: 'partners-resellers', title: 'Partners & Resellers', description: 'Scale with shared margin (40-50%)', content: createEmptyContent(), level: 3 }
                    ]
                }
            ]
        }
    ]
};

// Default Cost Tree Data
const defaultCostTree = {
    id: 'cost',
    title: 'Cost Reduction',
    description: 'Cost optimization levers',
    content: createEmptyContent(),
    level: 'root',
    children: [
        {
            id: 'cogs',
            title: 'COGS',
            description: 'Cost of Goods Sold',
            content: createEmptyContent(),
            level: 1,
            children: [
                {
                    id: 'materials',
                    title: 'Materials',
                    description: 'Raw material costs',
                    content: createEmptyContent(),
                    level: 2,
                    children: [
                        { id: 'supplier-negotiations', title: 'Supplier Negotiations', description: 'Better terms', content: createEmptyContent(), level: 3 },
                        { id: 'bulk-purchasing', title: 'Bulk Purchasing', description: 'Volume discounts', content: createEmptyContent(), level: 3 },
                        { id: 'substitution', title: 'Substitution', description: 'Alternative materials', content: createEmptyContent(), level: 3 }
                    ]
                },
                {
                    id: 'labor',
                    title: 'Labor',
                    description: 'Workforce costs',
                    content: createEmptyContent(),
                    level: 2,
                    children: [
                        { id: 'productivity', title: 'Productivity', description: 'Output per worker', content: createEmptyContent(), level: 3 },
                        { id: 'automation', title: 'Automation', description: 'Replace manual work', content: createEmptyContent(), level: 3 },
                        { id: 'outsourcing', title: 'Outsourcing', description: 'External providers', content: createEmptyContent(), level: 3 }
                    ]
                },
                {
                    id: 'manufacturing',
                    title: 'Manufacturing',
                    description: 'Production costs',
                    content: createEmptyContent(),
                    level: 2,
                    children: [
                        { id: 'yield-improvement', title: 'Yield Improvement', description: 'Reduce defects', content: createEmptyContent(), level: 3 },
                        { id: 'waste-reduction', title: 'Waste Reduction', description: 'Minimize scrap', content: createEmptyContent(), level: 3 },
                        { id: 'energy-efficiency', title: 'Energy Efficiency', description: 'Lower utility costs', content: createEmptyContent(), level: 3 }
                    ]
                }
            ]
        },
        {
            id: 'sga',
            title: 'SG&A',
            description: 'Selling, General & Admin',
            content: createEmptyContent(),
            level: 1,
            children: [
                {
                    id: 'sales-costs',
                    title: 'Sales Costs',
                    description: 'Sales team expenses',
                    content: createEmptyContent(),
                    level: 2,
                    children: [
                        { id: 'territory-optimization', title: 'Territory Optimization', description: 'Efficient coverage', content: createEmptyContent(), level: 3 },
                        { id: 'inside-sales', title: 'Inside Sales', description: 'Remote selling', content: createEmptyContent(), level: 3 },
                        { id: 'self-service', title: 'Self-Service', description: 'Customer portals', content: createEmptyContent(), level: 3 }
                    ]
                },
                {
                    id: 'marketing-costs',
                    title: 'Marketing',
                    description: 'Marketing spend',
                    content: createEmptyContent(),
                    level: 2,
                    children: [
                        { id: 'channel-efficiency', title: 'Channel Efficiency', description: 'ROI optimization', content: createEmptyContent(), level: 3 },
                        { id: 'digital-shift', title: 'Digital Shift', description: 'Lower-cost channels', content: createEmptyContent(), level: 3 },
                        { id: 'attribution', title: 'Attribution', description: 'Spend effectiveness', content: createEmptyContent(), level: 3 }
                    ]
                },
                {
                    id: 'ga',
                    title: 'G&A',
                    description: 'General & Admin',
                    content: createEmptyContent(),
                    level: 2,
                    children: [
                        { id: 'shared-services', title: 'Shared Services', description: 'Centralize functions', content: createEmptyContent(), level: 3 },
                        { id: 'real-estate', title: 'Real Estate', description: 'Facility costs', content: createEmptyContent(), level: 3 },
                        { id: 'tech-consolidation', title: 'Tech Consolidation', description: 'Reduce systems', content: createEmptyContent(), level: 3 }
                    ]
                }
            ]
        },
        {
            id: 'working-capital',
            title: 'Working Capital',
            description: 'Cash optimization',
            content: createEmptyContent(),
            level: 1,
            children: [
                {
                    id: 'inventory',
                    title: 'Inventory',
                    description: 'Stock management',
                    content: createEmptyContent(),
                    level: 2,
                    children: [
                        { id: 'demand-forecasting', title: 'Demand Forecasting', description: 'Predict needs', content: createEmptyContent(), level: 3 },
                        { id: 'jit', title: 'JIT', description: 'Just-in-time delivery', content: createEmptyContent(), level: 3 },
                        { id: 'sku-rationalization', title: 'SKU Rationalization', description: 'Reduce complexity', content: createEmptyContent(), level: 3 }
                    ]
                },
                {
                    id: 'receivables',
                    title: 'Receivables',
                    description: 'Collect faster',
                    content: createEmptyContent(),
                    level: 2,
                    children: [
                        { id: 'payment-terms', title: 'Payment Terms', description: 'Shorter cycles', content: createEmptyContent(), level: 3 },
                        { id: 'collections', title: 'Collections', description: 'Active follow-up', content: createEmptyContent(), level: 3 },
                        { id: 'billing-automation', title: 'Billing Automation', description: 'Faster invoicing', content: createEmptyContent(), level: 3 }
                    ]
                },
                {
                    id: 'payables',
                    title: 'Payables',
                    description: 'Pay strategically',
                    content: createEmptyContent(),
                    level: 2,
                    children: [
                        { id: 'payment-timing', title: 'Payment Timing', description: 'Optimize schedule', content: createEmptyContent(), level: 3 },
                        { id: 'dynamic-discounting', title: 'Dynamic Discounting', description: 'Early-pay savings', content: createEmptyContent(), level: 3 },
                        { id: 'vendor-terms', title: 'Vendor Terms', description: 'Negotiate terms', content: createEmptyContent(), level: 3 }
                    ]
                }
            ]
        }
    ]
};

// Default Process Tree Data
const defaultProcessTree = {
    id: 'process',
    title: 'Process Improvement',
    description: 'Operational excellence',
    content: createEmptyContent(),
    level: 'root',
    children: [
        {
            id: 'automation-root',
            title: 'Automation',
            description: 'Automate workflows',
            content: createEmptyContent(),
            level: 1,
            children: [
                {
                    id: 'manual-processes',
                    title: 'Manual Processes',
                    description: 'Eliminate manual work',
                    content: createEmptyContent(),
                    level: 2,
                    children: [
                        { id: 'rpa', title: 'RPA', description: 'Robotic process automation', content: createEmptyContent(), level: 3 },
                        { id: 'workflow-automation', title: 'Workflow Automation', description: 'Automated routing', content: createEmptyContent(), level: 3 },
                        { id: 'self-service-auto', title: 'Self-Service', description: 'User-driven tasks', content: createEmptyContent(), level: 3 }
                    ]
                },
                {
                    id: 'data-entry',
                    title: 'Data Entry',
                    description: 'Reduce manual input',
                    content: createEmptyContent(),
                    level: 2,
                    children: [
                        { id: 'ocr', title: 'OCR', description: 'Document scanning', content: createEmptyContent(), level: 3 },
                        { id: 'integration', title: 'Integration', description: 'System connections', content: createEmptyContent(), level: 3 },
                        { id: 'validation', title: 'Validation', description: 'Auto-verification', content: createEmptyContent(), level: 3 }
                    ]
                },
                {
                    id: 'reporting',
                    title: 'Reporting',
                    description: 'Automated insights',
                    content: createEmptyContent(),
                    level: 2,
                    children: [
                        { id: 'dashboards', title: 'Dashboards', description: 'Real-time views', content: createEmptyContent(), level: 3 },
                        { id: 'automated-alerts', title: 'Automated Alerts', description: 'Exception notices', content: createEmptyContent(), level: 3 },
                        { id: 'self-service-bi', title: 'Self-Service BI', description: 'User analytics', content: createEmptyContent(), level: 3 }
                    ]
                }
            ]
        },
        {
            id: 'quality',
            title: 'Quality',
            description: 'Improve outcomes',
            content: createEmptyContent(),
            level: 1,
            children: [
                {
                    id: 'defect-reduction',
                    title: 'Defect Reduction',
                    description: 'Fewer errors',
                    content: createEmptyContent(),
                    level: 2,
                    children: [
                        { id: 'root-cause', title: 'Root Cause Analysis', description: 'Find sources', content: createEmptyContent(), level: 3 },
                        { id: 'process-controls', title: 'Process Controls', description: 'Prevent issues', content: createEmptyContent(), level: 3 },
                        { id: 'training', title: 'Training', description: 'Skill building', content: createEmptyContent(), level: 3 }
                    ]
                },
                {
                    id: 'consistency',
                    title: 'Consistency',
                    description: 'Reliable output',
                    content: createEmptyContent(),
                    level: 2,
                    children: [
                        { id: 'standardization', title: 'Standardization', description: 'Common methods', content: createEmptyContent(), level: 3 },
                        { id: 'checklists', title: 'Checklists', description: 'Step verification', content: createEmptyContent(), level: 3 },
                        { id: 'quality-gates', title: 'Quality Gates', description: 'Stage approvals', content: createEmptyContent(), level: 3 }
                    ]
                },
                {
                    id: 'customer-feedback',
                    title: 'Customer Feedback',
                    description: 'Voice of customer',
                    content: createEmptyContent(),
                    level: 2,
                    children: [
                        { id: 'nps', title: 'NPS', description: 'Net promoter score', content: createEmptyContent(), level: 3 },
                        { id: 'complaints', title: 'Complaints', description: 'Issue resolution', content: createEmptyContent(), level: 3 },
                        { id: 'voc', title: 'Voice of Customer', description: 'Customer insights', content: createEmptyContent(), level: 3 }
                    ]
                }
            ]
        },
        {
            id: 'speed',
            title: 'Speed',
            description: 'Faster delivery',
            content: createEmptyContent(),
            level: 1,
            children: [
                {
                    id: 'cycle-time',
                    title: 'Cycle Time',
                    description: 'Process duration',
                    content: createEmptyContent(),
                    level: 2,
                    children: [
                        { id: 'bottleneck-removal', title: 'Bottleneck Removal', description: 'Remove constraints', content: createEmptyContent(), level: 3 },
                        { id: 'parallel-processing', title: 'Parallel Processing', description: 'Concurrent steps', content: createEmptyContent(), level: 3 },
                        { id: 'simplification', title: 'Simplification', description: 'Reduce steps', content: createEmptyContent(), level: 3 }
                    ]
                },
                {
                    id: 'lead-time',
                    title: 'Lead Time',
                    description: 'Time to start',
                    content: createEmptyContent(),
                    level: 2,
                    children: [
                        { id: 'forecasting', title: 'Forecasting', description: 'Anticipate needs', content: createEmptyContent(), level: 3 },
                        { id: 'pre-positioning', title: 'Pre-Positioning', description: 'Advance setup', content: createEmptyContent(), level: 3 },
                        { id: 'fast-track', title: 'Fast-Track Options', description: 'Priority paths', content: createEmptyContent(), level: 3 }
                    ]
                },
                {
                    id: 'response-time',
                    title: 'Response Time',
                    description: 'Time to respond',
                    content: createEmptyContent(),
                    level: 2,
                    children: [
                        { id: 'slas', title: 'SLAs', description: 'Service agreements', content: createEmptyContent(), level: 3 },
                        { id: 'escalation', title: 'Escalation', description: 'Priority routing', content: createEmptyContent(), level: 3 },
                        { id: 'resource-allocation', title: 'Resource Allocation', description: 'Capacity planning', content: createEmptyContent(), level: 3 }
                    ]
                }
            ]
        }
    ]
};

// ==================== STATE MANAGEMENT ====================

// Current tree being displayed
let currentTree = 'revenue';

// All trees data
let trees = {
    revenue: null,
    cost: null,
    process: null
};

// Expanded nodes per tree
let expandedNodesByTree = {
    revenue: new Set(['revenue']),
    cost: new Set(['cost']),
    process: new Set(['process'])
};

// Get current expanded nodes set
function getExpandedNodes() {
    return expandedNodesByTree[currentTree];
}

// Get current tree data
function getCurrentTreeData() {
    return trees[currentTree];
}

// Edit mode state
let isEditMode = false;
let currentPanelNodeId = null;
let selectedNodeId = null; // For keyboard navigation

// Debounce timer for auto-save
let saveDebounceTimer = null;

// ==================== DATA PERSISTENCE ====================

const STORAGE_KEY = 'valueTreeApp_data';
const PIN_STORAGE_KEY = 'valueTreeApp_pin';
const DEFAULT_PIN = '1234';

// API base URL (empty for same-origin, or set to your Vercel URL)
const API_BASE = '';

// Track if API is available
let apiAvailable = true;

// Deep clone helper
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// ==================== API FUNCTIONS ====================

// Fetch all trees from API
async function fetchTreesFromAPI() {
    try {
        const res = await fetch(`${API_BASE}/api/trees`);
        if (!res.ok) throw new Error('Failed to fetch trees');
        return await res.json();
    } catch (e) {
        console.warn('API unavailable, using localStorage:', e.message);
        apiAvailable = false;
        return null;
    }
}

// Fetch single tree from API
async function fetchTreeFromAPI(treeId) {
    try {
        const res = await fetch(`${API_BASE}/api/trees/${treeId}`);
        if (!res.ok) return null;
        return await res.json();
    } catch (e) {
        return null;
    }
}

// Save tree to API
async function saveTreeToAPI(treeId, treeData) {
    if (!apiAvailable) return;
    try {
        await fetch(`${API_BASE}/api/trees/${treeId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: treeData.title || treeId,
                description: treeData.description || '',
                structure: treeData
            })
        });
    } catch (e) {
        console.warn('Failed to save tree to API:', e.message);
    }
}

// Save node content to API
async function saveNodeToAPI(nodeId, nodeData) {
    if (!apiAvailable) return;
    try {
        await fetch(`${API_BASE}/api/nodes/${nodeId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nodeData)
        });
    } catch (e) {
        console.warn('Failed to save node to API:', e.message);
    }
}

// Fetch PIN from API
async function fetchPINFromAPI() {
    try {
        const res = await fetch(`${API_BASE}/api/settings/pin`);
        if (!res.ok) return null;
        const data = await res.json();
        return data.pin;
    } catch (e) {
        return null;
    }
}

// Save PIN to API
async function savePINToAPI(pin) {
    if (!apiAvailable) return;
    try {
        await fetch(`${API_BASE}/api/settings/pin`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pin })
        });
    } catch (e) {
        console.warn('Failed to save PIN to API:', e.message);
    }
}

// Merge saved data with defaults (preserving saved content but keeping structure)
function mergeTreeData(saved, defaultTree) {
    if (!saved) return deepClone(defaultTree);

    function mergeNode(savedNode, defaultNode) {
        if (!savedNode || !defaultNode) return defaultNode ? deepClone(defaultNode) : savedNode;

        const merged = {
            ...deepClone(defaultNode),
            title: savedNode.title || defaultNode.title,
            description: savedNode.description || defaultNode.description,
            content: savedNode.content || createEmptyContent()
        };

        if (defaultNode.children && defaultNode.children.length > 0) {
            merged.children = defaultNode.children.map(defaultChild => {
                const savedChild = savedNode.children?.find(sc => sc.id === defaultChild.id);
                return mergeNode(savedChild, defaultChild);
            });
        }

        return merged;
    }

    return mergeNode(saved, defaultTree);
}

// Load tree data from localStorage (sync fallback)
function loadTreeDataFromLocalStorage() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            trees.revenue = mergeTreeData(parsed.revenue, defaultRevenueTree);
            trees.cost = mergeTreeData(parsed.cost, defaultCostTree);
            trees.process = mergeTreeData(parsed.process, defaultProcessTree);

            // Restore expanded nodes
            if (parsed.expandedNodes) {
                if (parsed.expandedNodes.revenue) {
                    expandedNodesByTree.revenue = new Set(parsed.expandedNodes.revenue);
                }
                if (parsed.expandedNodes.cost) {
                    expandedNodesByTree.cost = new Set(parsed.expandedNodes.cost);
                }
                if (parsed.expandedNodes.process) {
                    expandedNodesByTree.process = new Set(parsed.expandedNodes.process);
                }
            }
        } else {
            trees.revenue = deepClone(defaultRevenueTree);
            trees.cost = deepClone(defaultCostTree);
            trees.process = deepClone(defaultProcessTree);
        }
    } catch (e) {
        console.error('Error loading tree data from localStorage:', e);
        trees.revenue = deepClone(defaultRevenueTree);
        trees.cost = deepClone(defaultCostTree);
        trees.process = deepClone(defaultProcessTree);
    }
}

// Load tree data - try API first, fall back to localStorage
async function loadTreeData() {
    // First, load from localStorage for immediate display
    loadTreeDataFromLocalStorage();

    // Then try to load from API
    try {
        const apiTrees = await fetchTreesFromAPI();

        if (apiTrees && apiTrees.length > 0) {
            // API has data, use it
            for (const apiTree of apiTrees) {
                if (apiTree.structure) {
                    const treeId = apiTree.id;
                    const defaultTree = treeId === 'revenue' ? defaultRevenueTree :
                                       treeId === 'cost' ? defaultCostTree :
                                       treeId === 'process' ? defaultProcessTree : null;

                    if (defaultTree && trees[treeId]) {
                        trees[treeId] = mergeTreeData(apiTree.structure, defaultTree);
                    }
                }
            }
            console.log('Loaded tree data from API');
            refreshTree();
        } else if (apiAvailable) {
            // API is available but empty - seed it with current data
            console.log('API empty, seeding with default data...');
            await seedAPIWithDefaults();
        }
    } catch (e) {
        console.warn('Could not load from API, using localStorage:', e);
    }
}

// Seed the API with default tree data
async function seedAPIWithDefaults() {
    const treeIds = ['revenue', 'cost', 'process'];
    for (const treeId of treeIds) {
        if (trees[treeId]) {
            await saveTreeToAPI(treeId, trees[treeId]);
        }
    }
    console.log('Seeded API with default data');
}

// Save tree data to localStorage AND API
function saveTreeData() {
    // Save to localStorage (immediate, for offline support)
    try {
        const data = {
            revenue: trees.revenue,
            cost: trees.cost,
            process: trees.process,
            expandedNodes: {
                revenue: Array.from(expandedNodesByTree.revenue),
                cost: Array.from(expandedNodesByTree.cost),
                process: Array.from(expandedNodesByTree.process)
            }
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
        console.error('Error saving tree data to localStorage:', e);
    }

    // Also save to API (async, for cloud persistence)
    saveTreeToAPI(currentTree, trees[currentTree]);
}

// Debounced save
function debouncedSave() {
    clearTimeout(saveDebounceTimer);
    saveDebounceTimer = setTimeout(() => {
        saveTreeData();
        showToast('Saved');
    }, 500);
}

// Cached PIN (loaded from API on startup)
let cachedPIN = null;

// Get stored PIN (sync, uses cache or localStorage)
function getStoredPIN() {
    return cachedPIN || localStorage.getItem(PIN_STORAGE_KEY) || DEFAULT_PIN;
}

// Set stored PIN (saves to both localStorage and API)
function setStoredPIN(pin) {
    cachedPIN = pin;
    localStorage.setItem(PIN_STORAGE_KEY, pin);
    savePINToAPI(pin);
}

// Load PIN from API on startup
async function loadPINFromAPI() {
    const apiPIN = await fetchPINFromAPI();
    if (apiPIN) {
        cachedPIN = apiPIN;
        localStorage.setItem(PIN_STORAGE_KEY, apiPIN);
    }
}

// ==================== TOAST NOTIFICATION ====================

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('visible');
    setTimeout(() => {
        toast.classList.remove('visible');
    }, 2000);
}

// ==================== TREE RENDERING ====================

// Render tree
function renderTree(node, container) {
    const expandedNodes = getExpandedNodes();
    const nodeGroup = document.createElement('div');
    nodeGroup.className = 'node-group';
    nodeGroup.dataset.nodeId = node.id;

    // Create node element
    const nodeEl = document.createElement('div');
    nodeEl.className = `node ${node.level === 'root' ? 'root' : 'level-' + node.level}`;
    if (node.description) {
        nodeEl.dataset.info = node.description;
    }

    const titleEl = document.createElement('div');
    titleEl.className = 'node-title';
    titleEl.textContent = node.title;
    nodeEl.appendChild(titleEl);

    if (node.description || isEditMode) {
        const descEl = document.createElement('div');
        descEl.className = 'node-description';
        descEl.textContent = node.description || '';
        nodeEl.appendChild(descEl);

        // In edit mode, make description editable on click
        descEl.addEventListener('click', (e) => {
            if (isEditMode) {
                e.stopPropagation();
                makeNodeDescriptionEditable(descEl, node.id);
            }
        });
    }

    // Add toggle button if has children
    if (node.children && node.children.length > 0) {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'toggle-btn';
        toggleBtn.innerHTML = expandedNodes.has(node.id) ? '−' : '+';
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleNode(node.id);
        });
        nodeEl.appendChild(toggleBtn);
    }

    // Double-click to open side panel (desktop)
    nodeEl.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        openSidePanel(node.id);
    });

    // Double-tap to open side panel (mobile)
    let lastTap = 0;
    nodeEl.addEventListener('touchend', (e) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        if (tapLength < 300 && tapLength > 0) {
            // Double tap detected
            e.preventDefault();
            e.stopPropagation();
            openSidePanel(node.id);
        }
        lastTap = currentTime;
    });

    // Single click - if panel is open, switch to this node
    nodeEl.addEventListener('click', (e) => {
        // Don't trigger if clicking on toggle button
        if (e.target.classList.contains('toggle-btn')) return;

        // If panel is open, switch to this node
        const panel = document.getElementById('sidePanel');
        if (panel.classList.contains('open') && !isEditMode) {
            e.stopPropagation();
            openSidePanel(node.id);
        }
    });

    // In edit mode, make title editable on click
    titleEl.addEventListener('click', (e) => {
        if (isEditMode) {
            e.stopPropagation();
            makeNodeTitleEditable(titleEl, node.id);
        }
    });

    nodeGroup.appendChild(nodeEl);

    // Only render children if this node is expanded (dynamic layout)
    if (node.children && node.children.length > 0 && expandedNodes.has(node.id)) {
        const childrenWrapper = document.createElement('div');
        childrenWrapper.className = 'children-wrapper expanded';

        // Add vertical line from parent (will be positioned via JS)
        const verticalLine = document.createElement('div');
        verticalLine.className = 'vertical-line';
        childrenWrapper.appendChild(verticalLine);

        const childrenContainer = document.createElement('div');
        childrenContainer.className = `children-container ${node.children.length > 1 ? 'multi' : ''}`;

        node.children.forEach(child => {
            const childBranch = document.createElement('div');
            childBranch.className = 'child-branch';
            renderTree(child, childBranch);
            childrenContainer.appendChild(childBranch);
        });

        // Add horizontal line element for multi-child containers
        if (node.children.length > 1) {
            const horizontalLine = document.createElement('div');
            horizontalLine.className = 'horizontal-line';
            childrenContainer.appendChild(horizontalLine);
        }

        childrenWrapper.appendChild(childrenContainer);
        nodeGroup.appendChild(childrenWrapper);
    }

    container.appendChild(nodeGroup);
}

// Make node title editable
function makeNodeTitleEditable(titleEl, nodeId) {
    if (titleEl.contentEditable === 'true') return;

    titleEl.contentEditable = 'true';
    titleEl.focus();

    // Select all text
    const range = document.createRange();
    range.selectNodeContents(titleEl);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    const finishEdit = () => {
        titleEl.contentEditable = 'false';
        const newTitle = titleEl.textContent.trim();
        if (newTitle) {
            saveNodeTitle(nodeId, newTitle);
        } else {
            // Restore original title
            const node = findNodeById(nodeId, getCurrentTreeData());
            if (node) titleEl.textContent = node.title;
        }
    };

    titleEl.addEventListener('blur', finishEdit, { once: true });
    titleEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            titleEl.blur();
        } else if (e.key === 'Escape') {
            const node = findNodeById(nodeId, getCurrentTreeData());
            if (node) titleEl.textContent = node.title;
            titleEl.blur();
        }
    });
}

// Save node title
function saveNodeTitle(nodeId, newTitle) {
    const node = findNodeById(nodeId, getCurrentTreeData());
    if (node) {
        node.title = newTitle;
        debouncedSave();

        // Update panel title if this node is open
        if (currentPanelNodeId === nodeId) {
            document.getElementById('panelTitle').textContent = newTitle;
        }
    }
}

// Make node description editable
function makeNodeDescriptionEditable(descEl, nodeId) {
    if (descEl.contentEditable === 'true') return;

    descEl.contentEditable = 'true';
    descEl.focus();

    // Select all text
    const range = document.createRange();
    range.selectNodeContents(descEl);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    const finishEdit = () => {
        descEl.contentEditable = 'false';
        const newDesc = descEl.textContent.trim();
        saveNodeDescription(nodeId, newDesc);
    };

    descEl.addEventListener('blur', finishEdit, { once: true });
    descEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            descEl.blur();
        } else if (e.key === 'Escape') {
            const node = findNodeById(nodeId, getCurrentTreeData());
            if (node) descEl.textContent = node.description || '';
            descEl.blur();
        }
    });
}

// Save node description
function saveNodeDescription(nodeId, newDescription) {
    const node = findNodeById(nodeId, getCurrentTreeData());
    if (node) {
        node.description = newDescription;
        debouncedSave();

        // Update panel description if this node is open
        if (currentPanelNodeId === nodeId) {
            document.getElementById('panelDescription').textContent = newDescription;
        }
    }
}

// Find node by ID in tree
function findNodeById(nodeId, tree) {
    if (tree.id === nodeId) return tree;
    if (tree.children) {
        for (const child of tree.children) {
            const found = findNodeById(nodeId, child);
            if (found) return found;
        }
    }
    return null;
}

// Toggle node expansion
function toggleNode(nodeId) {
    const expandedNodes = getExpandedNodes();
    const isExpanding = !expandedNodes.has(nodeId);

    if (isExpanding) {
        expandedNodes.add(nodeId);
    } else {
        expandedNodes.delete(nodeId);
        // Also collapse all descendants
        collapseDescendants(nodeId);
    }

    refreshTree();
    debouncedSave();

    // Auto-focus after render
    requestAnimationFrame(() => {
        if (isExpanding) {
            // Focus on the expanded node
            focusOnNode(nodeId);
        } else {
            // Focus on the parent of the collapsed node (or the node itself if root-level)
            const parentId = findParentId(nodeId);
            focusOnNode(parentId || nodeId);
        }
    });
}

// Find the parent node ID
function findParentId(nodeId) {
    function searchParent(node, parent) {
        if (node.id === nodeId) return parent ? parent.id : null;
        if (node.children) {
            for (const child of node.children) {
                const found = searchParent(child, node);
                if (found !== undefined) return found;
            }
        }
        return undefined;
    }
    return searchParent(getCurrentTreeData(), null);
}

// Collapse all descendants of a node
function collapseDescendants(nodeId) {
    const expandedNodes = getExpandedNodes();

    function findNode(node) {
        if (node.id === nodeId) return node;
        if (node.children) {
            for (const child of node.children) {
                const found = findNode(child);
                if (found) return found;
            }
        }
        return null;
    }

    function removeDescendants(node) {
        if (node.children) {
            node.children.forEach(child => {
                expandedNodes.delete(child.id);
                removeDescendants(child);
            });
        }
    }

    const targetNode = findNode(getCurrentTreeData());
    if (targetNode) {
        removeDescendants(targetNode);
    }
}

// Focus view on a specific node
function focusOnNode(nodeId) {
    const nodeGroup = document.querySelector(`[data-node-id="${nodeId}"]`);
    if (!nodeGroup) return;

    const containerRect = canvasContainer.getBoundingClientRect();
    const nodeRect = nodeGroup.getBoundingClientRect();

    // Calculate center of the node group (including its children)
    const nodeCenterX = (nodeRect.left + nodeRect.right) / 2;
    const nodeCenterY = nodeRect.top + 50; // Focus near top of expanded area

    // Get the visible center (accounting for panel if open)
    const visibleCenterX = getVisibleCenterX();

    // Calculate where we need to pan to center this node in visible area
    const targetX = visibleCenterX - (nodeCenterX - containerRect.left - panX);
    const targetY = containerRect.height / 3 - (nodeCenterY - containerRect.top - panY);

    // Animate to new position
    animatePan(targetX, targetY);
}

// Refresh tree rendering
function refreshTree() {
    const treeContainer = document.getElementById('tree');
    treeContainer.innerHTML = '';
    renderTree(getCurrentTreeData(), treeContainer);
    // Position horizontal lines after DOM fully updates - multiple passes for nested elements
    requestAnimationFrame(() => {
        positionHorizontalLines();
        setTimeout(positionHorizontalLines, 50);
        setTimeout(positionHorizontalLines, 150);
        setTimeout(positionHorizontalLines, 300);
    });
}

// Position connector lines (vertical and horizontal)
function positionHorizontalLines() {
    const wrappers = document.querySelectorAll('.children-wrapper');

    wrappers.forEach(wrapper => {
        const verticalLine = wrapper.querySelector(':scope > .vertical-line');
        const container = wrapper.querySelector(':scope > .children-container');
        if (!verticalLine || !container) return;

        const branches = Array.from(container.querySelectorAll(':scope > .child-branch'));
        if (branches.length === 0) return;

        // Vertical line always at 50% (center of parent node above)
        verticalLine.style.left = '50%';
        verticalLine.style.transform = 'translateX(-50%)';

        // Position horizontal line for multiple children
        if (branches.length > 1) {
            const horizontalLine = container.querySelector(':scope > .horizontal-line');
            if (!horizontalLine) return;

            const firstBranch = branches[0];
            const lastBranch = branches[branches.length - 1];

            const firstCenter = firstBranch.offsetLeft + firstBranch.offsetWidth / 2;
            const lastCenter = lastBranch.offsetLeft + lastBranch.offsetWidth / 2;

            horizontalLine.style.left = `${Math.min(firstCenter, lastCenter)}px`;
            horizontalLine.style.width = `${Math.abs(lastCenter - firstCenter)}px`;
            horizontalLine.style.right = 'auto';
        }
    });
}

// Expand all nodes
function expandAll(node = null) {
    const tree = node || getCurrentTreeData();
    const expandedNodes = getExpandedNodes();
    expandedNodes.add(tree.id);
    if (tree.children) {
        tree.children.forEach(child => expandAll(child));
    }
}

// Collapse all nodes
function collapseAll(node = null) {
    const tree = node || getCurrentTreeData();
    const expandedNodes = getExpandedNodes();
    const rootId = getCurrentTreeData().id;

    if (tree.id !== rootId) {
        expandedNodes.delete(tree.id);
    }
    if (tree.children) {
        tree.children.forEach(child => collapseAll(child));
    }
}

// ==================== SIDE PANEL ====================

function openSidePanel(nodeId) {
    const node = findNodeById(nodeId, getCurrentTreeData());
    if (!node) return;

    // Check if panel is already open (switching nodes vs opening fresh)
    const panel = document.getElementById('sidePanel');
    const wasAlreadyOpen = panel.classList.contains('open');

    currentPanelNodeId = nodeId;

    // Build breadcrumb
    const breadcrumb = buildBreadcrumb(nodeId);
    document.getElementById('panelBreadcrumb').innerHTML = breadcrumb;

    // Populate title and description
    const panelTitle = document.getElementById('panelTitle');
    panelTitle.textContent = node.title;
    panelTitle.contentEditable = isEditMode ? 'true' : 'false';

    const panelDesc = document.getElementById('panelDescription');
    panelDesc.textContent = node.description || '';
    panelDesc.contentEditable = isEditMode ? 'true' : 'false';

    // Reset to first tab
    switchPanelTab('overview');

    // Populate all content sections
    populatePanelContent(node);

    // Show/hide rich text toolbar
    document.getElementById('richTextToolbar').classList.toggle('visible', isEditMode);

    // Show panel
    panel.classList.add('open');
    document.getElementById('sidePanelOverlay').classList.add('visible');

    // Only shift tree if panel wasn't already open
    if (!wasAlreadyOpen) {
        shiftTreeForPanel(true);
    } else {
        // Panel was already open - center on the clicked node
        focusOnNode(nodeId);
    }

    // Set up editing if in edit mode
    if (isEditMode) {
        setupPanelEditing();
    }
}

function populatePanelContent(node) {
    const content = node.content || createEmptyContent();

    // Overview tab
    document.getElementById('contentOverview').innerHTML = content.overview || '';
    document.getElementById('contentContribution').innerHTML = content.contributionToValue || '';
    document.getElementById('contentLogicalFlow').innerHTML = content.logicalFlow || '';

    // Diagnostic tab - list sections
    renderListSection('diagnosticQuestions', content.diagnostic?.keyQuestions || []);
    renderListSection('implementationSteps', content.diagnostic?.implementationSteps || []);
    renderListSection('pitfalls', content.diagnostic?.pitfalls || []);

    // Cases tab
    renderCases(content.caseExamples || []);

    // Sources tab
    renderSources(content.sources || []);

    // Make sections editable if in edit mode
    if (isEditMode) {
        document.querySelectorAll('.editable-section').forEach(el => {
            el.contentEditable = 'true';
        });
    } else {
        document.querySelectorAll('.editable-section').forEach(el => {
            el.contentEditable = 'false';
        });
    }
}

function renderListSection(containerId, items) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    items.forEach((item, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'list-item';
        itemEl.innerHTML = `
            <span class="list-item-number">${index + 1}.</span>
            <div class="list-item-content" data-index="${index}">${item}</div>
            <button class="list-item-delete" data-index="${index}">&times;</button>
        `;
        container.appendChild(itemEl);
    });
}

function renderCases(cases) {
    const container = document.getElementById('casesContainer');
    container.innerHTML = '';

    cases.forEach((caseItem, index) => {
        const caseEl = document.createElement('div');
        caseEl.className = 'case-card';
        caseEl.dataset.index = index;
        caseEl.innerHTML = `
            <div class="case-header">
                <div class="case-company" data-field="company">${caseItem.company || 'Company Name'}</div>
                <button class="case-delete" data-index="${index}">&times;</button>
            </div>
            <div class="case-field">
                <div class="case-field-label">Situation</div>
                <div class="case-field-content" data-field="situation">${caseItem.situation || ''}</div>
            </div>
            <div class="case-field">
                <div class="case-field-label">Actions Taken</div>
                <div class="case-field-content" data-field="actions">${caseItem.actions || ''}</div>
            </div>
            <div class="case-field">
                <div class="case-field-label">Results</div>
                <div class="case-field-content" data-field="results">${caseItem.results || ''}</div>
            </div>
            <div class="case-field">
                <div class="case-field-label">Source</div>
                <div class="case-field-content" data-field="sourceUrl">${caseItem.source?.url || ''}</div>
            </div>
        `;
        container.appendChild(caseEl);
    });
}

function renderSources(sources) {
    const container = document.getElementById('sourcesContainer');
    container.innerHTML = '';

    sources.forEach((source, index) => {
        const sourceEl = document.createElement('div');
        sourceEl.className = 'source-card';
        sourceEl.dataset.index = index;
        sourceEl.innerHTML = `
            <div class="source-icon">📄</div>
            <div class="source-details">
                <div class="source-title">${source.url ? `<a href="${source.url}" target="_blank">${source.title || 'Untitled'}</a>` : (source.title || 'Untitled')}</div>
                <div class="source-meta">${source.author || ''} ${source.date ? '• ' + source.date : ''}</div>
            </div>
            <button class="source-delete" data-index="${index}">&times;</button>
        `;
        container.appendChild(sourceEl);
    });
}

function switchPanelTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.panel-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tab === tabName);
    });

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.toggle('active', content.dataset.tab === tabName);
    });
}

function closeSidePanel() {
    // Check if panel is actually open
    const wasOpen = document.getElementById('sidePanel').classList.contains('open');

    // Save any pending content changes
    if (isEditMode && currentPanelNodeId) {
        saveAllPanelContent();
    }

    currentPanelNodeId = null;
    document.getElementById('sidePanel').classList.remove('open');
    document.getElementById('sidePanelOverlay').classList.remove('visible');

    // Only shift tree back if panel was actually open
    if (wasOpen) {
        shiftTreeForPanel(false);
    }
}

function saveAllPanelContent() {
    const node = findNodeById(currentPanelNodeId, getCurrentTreeData());
    if (!node) return;

    // Ensure content object exists
    if (!node.content) {
        node.content = createEmptyContent();
    }

    // Save overview tab content
    node.content.overview = document.getElementById('contentOverview').innerHTML;
    node.content.contributionToValue = document.getElementById('contentContribution').innerHTML;
    node.content.logicalFlow = document.getElementById('contentLogicalFlow').innerHTML;

    // Diagnostic lists are saved on individual edits

    debouncedSave();
}

// Get the panel width if open (0 if closed or on mobile)
function getOpenPanelWidth() {
    const panel = document.getElementById('sidePanel');
    const containerRect = canvasContainer.getBoundingClientRect();
    const isMobile = containerRect.width < 768;

    if (isMobile || !panel.classList.contains('open')) {
        return 0;
    }

    return Math.min(Math.max(containerRect.width * 0.5, 450), 700);
}

// Get the center X of the visible area (accounting for panel)
function getVisibleCenterX() {
    const containerRect = canvasContainer.getBoundingClientRect();
    const panelWidth = getOpenPanelWidth();
    // Visible area is from left edge to (right edge - panel width)
    return (containerRect.width - panelWidth) / 2;
}

// Shift tree to keep it centered when panel opens/closes
function shiftTreeForPanel(panelOpen) {
    const containerRect = canvasContainer.getBoundingClientRect();

    // Get panel width (only on desktop, on mobile it's full width)
    const isMobile = containerRect.width < 768;
    if (isMobile) return; // On mobile, panel covers everything, no shift needed

    const panelWidth = Math.min(Math.max(containerRect.width * 0.5, 450), 700);

    // Calculate shift needed to recenter the tree
    // When opening: shift left by half panel width
    // When closing: shift right by half panel width
    const shift = panelWidth / 2;

    if (panelOpen) {
        animatePan(panX - shift, panY);
    } else {
        animatePan(panX + shift, panY);
    }
}

function buildBreadcrumb(nodeId) {
    const path = [];

    function findPath(node, targetId, currentPath) {
        currentPath.push(node.title);
        if (node.id === targetId) {
            path.push(...currentPath);
            return true;
        }
        if (node.children) {
            for (const child of node.children) {
                if (findPath(child, targetId, [...currentPath])) {
                    return true;
                }
            }
        }
        return false;
    }

    findPath(getCurrentTreeData(), nodeId, []);
    return path.join(' <span>→</span> ');
}

function setupPanelEditing() {
    const panelTitle = document.getElementById('panelTitle');
    const panelDesc = document.getElementById('panelDescription');

    // Title editing
    panelTitle.onblur = () => {
        if (!currentPanelNodeId) return;
        const newTitle = panelTitle.textContent.trim();
        if (newTitle) {
            saveNodeTitle(currentPanelNodeId, newTitle);
            refreshTree();
        }
    };

    panelTitle.onkeydown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            panelTitle.blur();
        }
    };

    // Description editing
    panelDesc.onblur = () => {
        if (!currentPanelNodeId) return;
        saveNodeDescription(currentPanelNodeId, panelDesc.textContent.trim());
    };

    panelDesc.onkeydown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            panelDesc.blur();
        }
    };

    // Editable sections auto-save on blur
    document.querySelectorAll('.editable-section').forEach(el => {
        el.onblur = () => saveAllPanelContent();
    });

    // List item editing
    setupListEditing('diagnosticQuestions', 'diagnostic', 'keyQuestions');
    setupListEditing('implementationSteps', 'diagnostic', 'implementationSteps');
    setupListEditing('pitfalls', 'diagnostic', 'pitfalls');

    // Case editing
    setupCaseEditing();

    // Source editing
    setupSourceEditing();
}

function setupListEditing(containerId, parentKey, childKey) {
    const container = document.getElementById(containerId);

    // Edit items
    container.addEventListener('blur', (e) => {
        if (e.target.classList.contains('list-item-content')) {
            saveListItem(containerId, parentKey, childKey);
        }
    }, true);

    // Delete items
    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('list-item-delete')) {
            const index = parseInt(e.target.dataset.index);
            deleteListItem(containerId, parentKey, childKey, index);
        }
    });

    // Add item button
    const addBtn = container.nextElementSibling;
    if (addBtn && addBtn.classList.contains('add-item-btn')) {
        addBtn.onclick = () => addListItem(containerId, parentKey, childKey);
    }
}

function saveListItem(containerId, parentKey, childKey) {
    const node = findNodeById(currentPanelNodeId, getCurrentTreeData());
    if (!node || !node.content) return;

    const items = [];
    document.querySelectorAll(`#${containerId} .list-item-content`).forEach(el => {
        items.push(el.textContent.trim());
    });

    if (!node.content[parentKey]) {
        node.content[parentKey] = {};
    }
    node.content[parentKey][childKey] = items;
    debouncedSave();
}

function addListItem(containerId, parentKey, childKey) {
    const node = findNodeById(currentPanelNodeId, getCurrentTreeData());
    if (!node) return;

    if (!node.content) node.content = createEmptyContent();
    if (!node.content[parentKey]) node.content[parentKey] = {};
    if (!node.content[parentKey][childKey]) node.content[parentKey][childKey] = [];

    node.content[parentKey][childKey].push('New item');
    renderListSection(containerId, node.content[parentKey][childKey]);
    setupListEditing(containerId, parentKey, childKey);

    // Make the new item editable
    const items = document.querySelectorAll(`#${containerId} .list-item-content`);
    const lastItem = items[items.length - 1];
    if (lastItem && isEditMode) {
        lastItem.contentEditable = 'true';
        lastItem.focus();
        document.execCommand('selectAll', false, null);
    }

    debouncedSave();
}

function deleteListItem(containerId, parentKey, childKey, index) {
    const node = findNodeById(currentPanelNodeId, getCurrentTreeData());
    if (!node?.content?.[parentKey]?.[childKey]) return;

    node.content[parentKey][childKey].splice(index, 1);
    renderListSection(containerId, node.content[parentKey][childKey]);
    setupListEditing(containerId, parentKey, childKey);
    debouncedSave();
}

function setupCaseEditing() {
    const container = document.getElementById('casesContainer');

    // Edit case fields
    container.addEventListener('blur', (e) => {
        if (e.target.classList.contains('case-field-content') || e.target.classList.contains('case-company')) {
            saveCases();
        }
    }, true);

    // Delete case
    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('case-delete')) {
            const index = parseInt(e.target.dataset.index);
            deleteCase(index);
        }
    });

    // Add case button
    document.getElementById('addCaseBtn').onclick = addCase;

    // Make fields editable
    if (isEditMode) {
        container.querySelectorAll('.case-field-content, .case-company').forEach(el => {
            el.contentEditable = 'true';
        });
    }
}

function saveCases() {
    const node = findNodeById(currentPanelNodeId, getCurrentTreeData());
    if (!node) return;

    if (!node.content) node.content = createEmptyContent();

    const cases = [];
    document.querySelectorAll('.case-card').forEach(card => {
        cases.push({
            company: card.querySelector('.case-company')?.textContent?.trim() || '',
            situation: card.querySelector('[data-field="situation"]')?.textContent?.trim() || '',
            actions: card.querySelector('[data-field="actions"]')?.textContent?.trim() || '',
            results: card.querySelector('[data-field="results"]')?.textContent?.trim() || '',
            source: {
                url: card.querySelector('[data-field="sourceUrl"]')?.textContent?.trim() || ''
            }
        });
    });

    node.content.caseExamples = cases;
    debouncedSave();
}

function addCase() {
    const node = findNodeById(currentPanelNodeId, getCurrentTreeData());
    if (!node) return;

    if (!node.content) node.content = createEmptyContent();
    if (!node.content.caseExamples) node.content.caseExamples = [];

    node.content.caseExamples.push({
        company: 'Company Name',
        situation: '',
        actions: '',
        results: '',
        source: { url: '' }
    });

    renderCases(node.content.caseExamples);
    setupCaseEditing();
    debouncedSave();
}

function deleteCase(index) {
    const node = findNodeById(currentPanelNodeId, getCurrentTreeData());
    if (!node?.content?.caseExamples) return;

    node.content.caseExamples.splice(index, 1);
    renderCases(node.content.caseExamples);
    setupCaseEditing();
    debouncedSave();
}

function setupSourceEditing() {
    const container = document.getElementById('sourcesContainer');

    // Delete source
    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('source-delete')) {
            const index = parseInt(e.target.dataset.index);
            deleteSource(index);
        }
    });

    // Add source button
    document.getElementById('addSourceBtn').onclick = addSource;
}

function addSource() {
    const title = prompt('Source title:');
    if (!title) return;

    const url = prompt('Source URL (optional):') || '';
    const author = prompt('Author (optional):') || '';

    const node = findNodeById(currentPanelNodeId, getCurrentTreeData());
    if (!node) return;

    if (!node.content) node.content = createEmptyContent();
    if (!node.content.sources) node.content.sources = [];

    node.content.sources.push({ title, url, author, date: new Date().toISOString().split('T')[0] });
    renderSources(node.content.sources);
    setupSourceEditing();
    debouncedSave();
}

function deleteSource(index) {
    const node = findNodeById(currentPanelNodeId, getCurrentTreeData());
    if (!node?.content?.sources) return;

    node.content.sources.splice(index, 1);
    renderSources(node.content.sources);
    setupSourceEditing();
    debouncedSave();
}

// ==================== RICH TEXT EDITOR ====================

function initRichTextEditor() {
    const toolbar = document.getElementById('richTextToolbar');
    const panelSummary = document.getElementById('panelSummary');

    // Heading select
    document.getElementById('headingSelect').addEventListener('change', (e) => {
        const value = e.target.value;
        if (value) {
            document.execCommand('formatBlock', false, value);
        } else {
            document.execCommand('formatBlock', false, 'p');
        }
        panelSummary.focus();
    });

    // Format buttons
    toolbar.querySelectorAll('button[data-command]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const command = btn.dataset.command;

            if (command === 'createLink') {
                const url = prompt('Enter URL:');
                if (url) {
                    document.execCommand('createLink', false, url);
                }
            } else if (command === 'insertImage') {
                const url = prompt('Enter image URL:');
                if (url) {
                    document.execCommand('insertImage', false, url);
                }
            } else {
                document.execCommand(command, false, null);
            }

            panelSummary.focus();
        });
    });
}

// ==================== PIN MODAL & EDIT MODE ====================

let pinCallback = null;
let pinMode = 'verify'; // 'verify' or 'change'

function showPinModal(mode = 'verify', callback = null) {
    pinMode = mode;
    pinCallback = callback;

    const modal = document.getElementById('pinModalOverlay');
    const input = document.getElementById('pinInput');
    const title = document.getElementById('pinModalTitle');
    const desc = document.getElementById('pinModalDesc');
    const error = document.getElementById('pinError');

    if (mode === 'change') {
        title.textContent = 'Set New PIN';
        desc.textContent = 'Enter a new 4-digit PIN';
    } else {
        title.textContent = 'Enter PIN';
        desc.textContent = 'Enter 4-digit PIN to access edit mode';
    }

    input.value = '';
    error.textContent = '';
    modal.classList.add('visible');
    input.focus();
}

function hidePinModal() {
    document.getElementById('pinModalOverlay').classList.remove('visible');
    // Reset checkbox if PIN was cancelled
    if (!isEditMode) {
        document.getElementById('editModeCheckbox').checked = false;
    }
    pinCallback = null;
}

function verifyPin() {
    const input = document.getElementById('pinInput');
    const error = document.getElementById('pinError');
    const pin = input.value;

    if (pin.length !== 4 || !/^\d{4}$/.test(pin)) {
        error.textContent = 'PIN must be 4 digits';
        return;
    }

    if (pinMode === 'change') {
        setStoredPIN(pin);
        showToast('PIN changed');
        const callback = pinCallback; // Save before hidePinModal clears it
        hidePinModal();
        if (callback) callback(true);
    } else {
        if (pin === getStoredPIN()) {
            const callback = pinCallback; // Save before hidePinModal clears it
            hidePinModal();
            if (callback) callback(true);
        } else {
            error.textContent = 'Incorrect PIN';
            input.value = '';
            input.focus();
        }
    }
}

function toggleEditMode(forceOff = false) {
    const checkbox = document.getElementById('editModeCheckbox');

    if (isEditMode || forceOff) {
        // Exit edit mode
        isEditMode = false;
        document.body.classList.remove('edit-mode');
        checkbox.checked = false;

        // Update panel if open
        if (currentPanelNodeId) {
            const node = findNodeById(currentPanelNodeId, getCurrentTreeData());
            if (node) {
                saveAllPanelContent();
                populatePanelContent(node);
            }
            document.getElementById('panelTitle').contentEditable = 'false';
            document.getElementById('panelDescription').contentEditable = 'false';
            document.getElementById('richTextToolbar').classList.remove('visible');
        }

        refreshTree();
        showToast('Edit mode off');
    } else {
        // Enter edit mode - verify PIN first
        showPinModal('verify', (success) => {
            if (success) {
                isEditMode = true;
                document.body.classList.add('edit-mode');
                checkbox.checked = true;

                // Update panel if open
                if (currentPanelNodeId) {
                    const node = findNodeById(currentPanelNodeId, getCurrentTreeData());
                    if (node) {
                        populatePanelContent(node);
                        setupPanelEditing();
                    }
                    document.getElementById('panelTitle').contentEditable = 'true';
                    document.getElementById('panelDescription').contentEditable = 'true';
                    document.getElementById('richTextToolbar').classList.add('visible');
                }

                refreshTree();
                showToast('Edit mode on');
            } else {
                // PIN cancelled or failed, uncheck
                checkbox.checked = false;
            }
        });
    }
}

// ==================== TREE SWITCHING ====================

function switchTree(treeName) {
    if (treeName === currentTree) return;

    // Close side panel
    closeSidePanel();

    // Update current tree
    currentTree = treeName;

    // Update body data attribute for styling
    document.body.setAttribute('data-tree', treeName);

    // Update nav
    document.querySelectorAll('#nav a').forEach(a => {
        a.classList.toggle('active', a.dataset.tree === treeName);
    });

    // Refresh and center
    refreshTree();
    scale = 1;
    panX = 0;
    panY = 0;
    updateTransform();
    setTimeout(() => {
        centerTree();
        positionHorizontalLines();
    }, 100);
}

// ==================== PAN AND ZOOM ====================

let scale = 1;
let panX = 0;
let panY = 0;
let isDragging = false;
let startX, startY;

const canvasContainer = document.getElementById('canvasContainer');
const treeCanvas = document.getElementById('treeCanvas');

function updateTransform() {
    treeCanvas.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
}

// Animate pan to target position
function animatePan(targetX, targetY, duration = 300) {
    const startPanX = panX;
    const startPanY = panY;
    const startTime = performance.now();

    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);

        panX = startPanX + (targetX - startPanX) * eased;
        panY = startPanY + (targetY - startPanY) * eased;
        updateTransform();
        positionHorizontalLines();

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

// Mouse drag for panning
canvasContainer.addEventListener('mousedown', (e) => {
    if (e.shiftKey) return; // Don't start drag if shift-panning
    // Don't start drag if clicking on a node (for edit mode)
    if (e.target.closest('.node')) return;
    isDragging = true;
    startX = e.clientX - panX;
    startY = e.clientY - panY;
    canvasContainer.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        panX = e.clientX - startX;
        panY = e.clientY - startY;
        updateTransform();
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    canvasContainer.style.cursor = 'grab';
});

// Shift + mouse move for panning (no click required)
let lastMouseX = 0;
let lastMouseY = 0;
let shiftPanning = false;

canvasContainer.addEventListener('mousemove', (e) => {
    if (e.shiftKey && !isDragging) {
        if (shiftPanning) {
            // Calculate delta from last position
            const deltaX = e.clientX - lastMouseX;
            const deltaY = e.clientY - lastMouseY;
            panX += deltaX;
            panY += deltaY;
            updateTransform();
            canvasContainer.style.cursor = 'move';
        }
        shiftPanning = true;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
    } else {
        if (shiftPanning) {
            canvasContainer.style.cursor = 'grab';
        }
        shiftPanning = false;
    }
});

// Mouse wheel for zooming
canvasContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    const newScale = Math.min(Math.max(scale * delta, 0.3), 2);

    // Zoom toward cursor position
    const rect = canvasContainer.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    panX = mouseX - (mouseX - panX) * (newScale / scale);
    panY = mouseY - (mouseY - panY) * (newScale / scale);

    scale = newScale;
    updateTransform();
    positionHorizontalLines();
});

// Touch support for mobile
let touchStartX = 0;
let touchStartY = 0;
let touchStartPanX = 0;
let touchStartPanY = 0;
let initialPinchDistance = 0;
let initialPinchScale = 1;

// Single touch for panning
canvasContainer.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
        // Single finger - pan
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchStartPanX = panX;
        touchStartPanY = panY;
    } else if (e.touches.length === 2) {
        // Two fingers - pinch zoom
        e.preventDefault();
        initialPinchDistance = getPinchDistance(e.touches);
        initialPinchScale = scale;
    }
}, { passive: false });

canvasContainer.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1) {
        // Single finger pan
        const deltaX = e.touches[0].clientX - touchStartX;
        const deltaY = e.touches[0].clientY - touchStartY;
        panX = touchStartPanX + deltaX;
        panY = touchStartPanY + deltaY;
        updateTransform();
    } else if (e.touches.length === 2) {
        // Pinch zoom
        e.preventDefault();
        const currentDistance = getPinchDistance(e.touches);
        const pinchCenter = getPinchCenter(e.touches);
        const rect = canvasContainer.getBoundingClientRect();
        const centerX = pinchCenter.x - rect.left;
        const centerY = pinchCenter.y - rect.top;

        const newScale = Math.min(Math.max(initialPinchScale * (currentDistance / initialPinchDistance), 0.3), 2);

        // Zoom toward pinch center
        panX = centerX - (centerX - panX) * (newScale / scale);
        panY = centerY - (centerY - panY) * (newScale / scale);

        scale = newScale;
        updateTransform();
        positionHorizontalLines();
    }
}, { passive: false });

canvasContainer.addEventListener('touchend', (e) => {
    if (e.touches.length === 1) {
        // One finger left after pinch - reset for pan
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchStartPanX = panX;
        touchStartPanY = panY;
    }
});

// Helper functions for pinch gesture
function getPinchDistance(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
}

function getPinchCenter(touches) {
    return {
        x: (touches[0].clientX + touches[1].clientX) / 2,
        y: (touches[0].clientY + touches[1].clientY) / 2
    };
}

// Reset view - zoom to 100% and center on tree
function resetView() {
    scale = 1;
    updateTransform();
    setTimeout(() => {
        centerTree();
        positionHorizontalLines();
    }, 50);
}

// Center tree in viewport
function centerTree() {
    const containerRect = canvasContainer.getBoundingClientRect();
    const treeEl = document.getElementById('tree');
    const treeRect = treeEl.getBoundingClientRect();

    // Calculate actual tree dimensions (accounting for current scale)
    const treeWidth = treeRect.width / scale;
    const treeHeight = treeRect.height / scale;

    // Get visible width (accounting for panel if open)
    const panelWidth = getOpenPanelWidth();
    const visibleWidth = containerRect.width - panelWidth;

    // Center horizontally in the visible area
    panX = (visibleWidth - treeWidth * scale) / 2;

    // On mobile, position closer to top; on desktop, center more
    const isMobile = containerRect.width < 768;
    panY = isMobile ? 15 : Math.max(30, (containerRect.height - treeHeight * scale) / 3);

    updateTransform();
}

// Fit entire tree in view
function fitTreeInView() {
    const containerRect = canvasContainer.getBoundingClientRect();
    const treeEl = document.getElementById('tree');

    // Get visible width (accounting for panel if open)
    const panelWidth = getOpenPanelWidth();
    const visibleWidth = containerRect.width - panelWidth;

    // Reset scale temporarily to get true dimensions
    const oldScale = scale;
    scale = 1;
    updateTransform();

    const treeRect = treeEl.getBoundingClientRect();

    // Calculate scale to fit tree with padding in visible area
    const padding = 60;
    const scaleX = (visibleWidth - padding) / treeRect.width;
    const scaleY = (containerRect.height - padding) / treeRect.height;
    scale = Math.min(scaleX, scaleY, 1); // Don't zoom in past 100%
    scale = Math.max(scale, 0.3); // Don't zoom out too far

    // Center the tree in visible area
    const scaledWidth = treeRect.width * scale;
    const scaledHeight = treeRect.height * scale;
    panX = (visibleWidth - scaledWidth) / 2;
    panY = (containerRect.height - scaledHeight) / 2;

    updateTransform();
    requestAnimationFrame(positionHorizontalLines);
}

// ==================== PRINT / PDF EXPORT ====================

function printCurrentNode() {
    if (!currentPanelNodeId) return;

    const node = findNodeById(currentPanelNodeId, getCurrentTreeData());
    if (!node) return;

    const content = node.content || createEmptyContent();
    const breadcrumb = buildBreadcrumb(currentPanelNodeId).replace(/<span>→<\/span>/g, ' → ');

    // Build print HTML
    let printHtml = `
        <div class="print-container">
            <div class="print-header">
                <div class="print-breadcrumb">${currentTree.toUpperCase()} | ${breadcrumb}</div>
                <h1 class="print-title">${node.title}</h1>
                <div class="print-description">${node.description || ''}</div>
            </div>
    `;

    // Overview section
    if (content.overview) {
        printHtml += `
            <div class="print-section">
                <h2 class="print-section-title">Overview</h2>
                <div class="print-section-content">${content.overview}</div>
            </div>
        `;
    }

    // Contribution to Value
    if (content.contributionToValue) {
        printHtml += `
            <div class="print-section">
                <h2 class="print-section-title">Contribution to Value</h2>
                <div class="print-section-content">${content.contributionToValue}</div>
            </div>
        `;
    }

    // Logical Flow
    if (content.logicalFlow) {
        printHtml += `
            <div class="print-section">
                <h2 class="print-section-title">Logical Flow</h2>
                <div class="print-section-content">${content.logicalFlow}</div>
            </div>
        `;
    }

    // Diagnostic Questions
    if (content.diagnostic?.keyQuestions?.length > 0) {
        printHtml += `
            <div class="print-section">
                <h2 class="print-section-title">Key Diagnostic Questions</h2>
                <ul class="print-list">
                    ${content.diagnostic.keyQuestions.map(q => `<li>${q}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    // Implementation Steps
    if (content.diagnostic?.implementationSteps?.length > 0) {
        printHtml += `
            <div class="print-section">
                <h2 class="print-section-title">Implementation Steps</h2>
                <ol class="print-list">
                    ${content.diagnostic.implementationSteps.map(s => `<li>${s}</li>`).join('')}
                </ol>
            </div>
        `;
    }

    // Common Pitfalls
    if (content.diagnostic?.pitfalls?.length > 0) {
        printHtml += `
            <div class="print-section">
                <h2 class="print-section-title">Common Pitfalls</h2>
                <ul class="print-list">
                    ${content.diagnostic.pitfalls.map(p => `<li>${p}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    // Case Examples
    if (content.caseExamples?.length > 0) {
        printHtml += `
            <div class="print-section">
                <h2 class="print-section-title">Case Examples</h2>
                ${content.caseExamples.map(c => `
                    <div class="print-case">
                        <div class="print-case-company">${c.company}</div>
                        ${c.situation ? `<div class="print-case-field"><div class="print-case-label">Situation</div><div class="print-case-value">${c.situation}</div></div>` : ''}
                        ${c.actions ? `<div class="print-case-field"><div class="print-case-label">Actions</div><div class="print-case-value">${c.actions}</div></div>` : ''}
                        ${c.results ? `<div class="print-case-field"><div class="print-case-label">Results</div><div class="print-case-value">${c.results}</div></div>` : ''}
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Sources
    if (content.sources?.length > 0) {
        printHtml += `
            <div class="print-section">
                <h2 class="print-section-title">Sources</h2>
                ${content.sources.map(s => `
                    <div class="print-source">
                        <div class="print-source-title">${s.url ? `<a href="${s.url}">${s.title}</a>` : s.title}</div>
                        <div class="print-source-meta">${s.author || ''} ${s.date ? '• ' + s.date : ''}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    printHtml += `
            <div class="print-footer">
                Value Creation Encyclopedia • Printed ${new Date().toLocaleDateString()}
            </div>
        </div>
    `;

    // Create print container
    const printContainer = document.createElement('div');
    printContainer.id = 'printContainer';
    printContainer.innerHTML = printHtml;
    document.body.appendChild(printContainer);
    document.body.classList.add('printing');

    // Print
    window.print();

    // Clean up after print dialog closes
    setTimeout(() => {
        document.body.classList.remove('printing');
        printContainer.remove();
    }, 100);
}

// ==================== KEYBOARD NAVIGATION ====================

function selectNode(nodeId) {
    // Remove previous selection
    document.querySelectorAll('.node.keyboard-selected').forEach(el => {
        el.classList.remove('keyboard-selected');
    });

    selectedNodeId = nodeId;

    if (nodeId) {
        const nodeGroup = document.querySelector(`[data-node-id="${nodeId}"]`);
        if (nodeGroup) {
            const nodeEl = nodeGroup.querySelector('.node');
            if (nodeEl) {
                nodeEl.classList.add('keyboard-selected');
                nodeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            }
        }
    }
}

function getVisibleNodes() {
    // Get all visible nodes in DOM order
    const nodes = [];
    const expandedNodes = getExpandedNodes();

    function collectNodes(node, depth = 0) {
        nodes.push({ id: node.id, depth, node });

        if (node.children && expandedNodes.has(node.id)) {
            node.children.forEach(child => collectNodes(child, depth + 1));
        }
    }

    collectNodes(getCurrentTreeData());
    return nodes;
}

function navigateToNode(direction) {
    const visibleNodes = getVisibleNodes();
    if (visibleNodes.length === 0) return;

    let currentIndex = visibleNodes.findIndex(n => n.id === selectedNodeId);

    if (currentIndex === -1) {
        // No selection - start at root
        selectNode(visibleNodes[0].id);
        return;
    }

    const current = visibleNodes[currentIndex];

    switch (direction) {
        case 'down':
            // Move to next visible node
            if (currentIndex < visibleNodes.length - 1) {
                selectNode(visibleNodes[currentIndex + 1].id);
            }
            break;

        case 'up':
            // Move to previous visible node
            if (currentIndex > 0) {
                selectNode(visibleNodes[currentIndex - 1].id);
            }
            break;

        case 'right':
            // Expand current node or move to first child
            const expandedNodes = getExpandedNodes();
            if (current.node.children && current.node.children.length > 0) {
                if (!expandedNodes.has(current.id)) {
                    // Expand the node
                    expandedNodes.add(current.id);
                    refreshTree();
                    debouncedSave();
                    selectNode(current.id);
                } else {
                    // Move to first child
                    selectNode(current.node.children[0].id);
                }
            }
            break;

        case 'left':
            // Collapse current node or move to parent
            const expanded = getExpandedNodes();
            if (expanded.has(current.id) && current.node.children && current.node.children.length > 0) {
                // Collapse the node
                expanded.delete(current.id);
                collapseDescendants(current.id);
                refreshTree();
                debouncedSave();
                selectNode(current.id);
            } else {
                // Move to parent
                const parentId = findParentId(current.id);
                if (parentId) {
                    selectNode(parentId);
                }
            }
            break;
    }
}

// ==================== SEARCH ====================

let searchSelectedIndex = -1;

function searchAllNodes(query) {
    if (!query || query.length < 2) return [];

    const results = [];
    const lowerQuery = query.toLowerCase();

    // Search all three trees
    const treesToSearch = [
        { name: 'revenue', tree: trees.revenue },
        { name: 'cost', tree: trees.cost },
        { name: 'process', tree: trees.process }
    ];

    treesToSearch.forEach(({ name, tree }) => {
        searchNode(tree, lowerQuery, [], name, results);
    });

    return results;
}

function searchNode(node, query, path, treeName, results) {
    const currentPath = [...path, node.title];

    // Check if node matches
    const titleMatch = node.title.toLowerCase().includes(query);
    const descMatch = node.description?.toLowerCase().includes(query);
    const contentMatch = searchNodeContent(node.content, query);

    if (titleMatch || descMatch || contentMatch) {
        results.push({
            id: node.id,
            title: node.title,
            description: node.description,
            path: currentPath.slice(0, -1).join(' → '),
            treeName: treeName,
            matchType: titleMatch ? 'title' : (descMatch ? 'description' : 'content')
        });
    }

    // Search children
    if (node.children) {
        node.children.forEach(child => {
            searchNode(child, query, currentPath, treeName, results);
        });
    }
}

function searchNodeContent(content, query) {
    if (!content) return false;

    // Search overview text content
    const textFields = [
        content.overview,
        content.contributionToValue,
        content.logicalFlow
    ];

    for (const field of textFields) {
        if (field && stripHtml(field).toLowerCase().includes(query)) {
            return true;
        }
    }

    // Search diagnostic lists
    if (content.diagnostic) {
        const lists = [
            content.diagnostic.keyQuestions,
            content.diagnostic.implementationSteps,
            content.diagnostic.pitfalls
        ];
        for (const list of lists) {
            if (list && list.some(item => item.toLowerCase().includes(query))) {
                return true;
            }
        }
    }

    // Search cases
    if (content.caseExamples) {
        for (const caseItem of content.caseExamples) {
            if (caseItem.company?.toLowerCase().includes(query) ||
                caseItem.situation?.toLowerCase().includes(query) ||
                caseItem.actions?.toLowerCase().includes(query) ||
                caseItem.results?.toLowerCase().includes(query)) {
                return true;
            }
        }
    }

    // Search sources
    if (content.sources) {
        for (const source of content.sources) {
            if (source.title?.toLowerCase().includes(query) ||
                source.author?.toLowerCase().includes(query)) {
                return true;
            }
        }
    }

    return false;
}

function stripHtml(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
}

function renderSearchResults(results) {
    const container = document.getElementById('searchResults');

    if (results.length === 0) {
        container.innerHTML = '<div class="search-no-results">No results found</div>';
        container.classList.add('visible');
        return;
    }

    container.innerHTML = results.map((result, index) => `
        <div class="search-result-item" data-index="${index}" data-node-id="${result.id}" data-tree="${result.treeName}">
            <div class="search-result-title">
                <span class="search-result-tree ${result.treeName}">${result.treeName}</span>
                ${result.title}
            </div>
            <div class="search-result-path">${result.path || 'Root'}</div>
        </div>
    `).join('');

    container.classList.add('visible');
    searchSelectedIndex = -1;
}

function hideSearchResults() {
    document.getElementById('searchResults').classList.remove('visible');
    searchSelectedIndex = -1;
}

function selectSearchResult(index) {
    const items = document.querySelectorAll('.search-result-item');
    items.forEach((item, i) => {
        item.classList.toggle('selected', i === index);
    });
    searchSelectedIndex = index;

    // Scroll selected item into view
    if (index >= 0 && index < items.length) {
        items[index].scrollIntoView({ block: 'nearest' });
    }
}

function navigateToSearchResult(nodeId, treeName) {
    // Switch to the correct tree if needed
    if (treeName !== currentTree) {
        switchTree(treeName);
    }

    // Expand path to node
    expandPathToNode(nodeId);

    // Open the side panel with this node
    setTimeout(() => {
        openSidePanel(nodeId);
    }, 100);

    // Clear search
    document.getElementById('searchInput').value = '';
    hideSearchResults();
}

function expandPathToNode(nodeId) {
    const path = findPathToNode(nodeId, getCurrentTreeData(), []);
    if (path) {
        const expandedNodes = getExpandedNodes();
        path.forEach(id => expandedNodes.add(id));
        refreshTree();
    }
}

function findPathToNode(targetId, node, path) {
    const currentPath = [...path, node.id];

    if (node.id === targetId) {
        return currentPath;
    }

    if (node.children) {
        for (const child of node.children) {
            const found = findPathToNode(targetId, child, currentPath);
            if (found) return found;
        }
    }

    return null;
}

// ==================== EVENT LISTENERS ====================

// Search
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (query.length >= 2) {
        const results = searchAllNodes(query);
        renderSearchResults(results);
    } else {
        hideSearchResults();
    }
});

searchInput.addEventListener('keydown', (e) => {
    const items = document.querySelectorAll('.search-result-item');

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        const newIndex = Math.min(searchSelectedIndex + 1, items.length - 1);
        selectSearchResult(newIndex);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const newIndex = Math.max(searchSelectedIndex - 1, 0);
        selectSearchResult(newIndex);
    } else if (e.key === 'Enter') {
        e.preventDefault();
        if (searchSelectedIndex >= 0 && searchSelectedIndex < items.length) {
            const item = items[searchSelectedIndex];
            navigateToSearchResult(item.dataset.nodeId, item.dataset.tree);
        }
    } else if (e.key === 'Escape') {
        hideSearchResults();
        searchInput.blur();
    }
});

searchInput.addEventListener('focus', () => {
    const query = searchInput.value.trim();
    if (query.length >= 2) {
        const results = searchAllNodes(query);
        renderSearchResults(results);
    }
});

searchResults.addEventListener('click', (e) => {
    const item = e.target.closest('.search-result-item');
    if (item) {
        navigateToSearchResult(item.dataset.nodeId, item.dataset.tree);
    }
});

// Close search results when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        hideSearchResults();
    }
});

// Controls
document.getElementById('expandAll').addEventListener('click', () => {
    expandAll();
    refreshTree();
    debouncedSave();
    // Zoom out and center to show everything
    setTimeout(() => {
        fitTreeInView();
    }, 50);
});

document.getElementById('collapseAll').addEventListener('click', () => {
    collapseAll();
    refreshTree();
    debouncedSave();
    // Reset scale first, then center after DOM updates
    scale = 1;
    panX = 0;
    panY = 0;
    updateTransform();
    // Wait for DOM to fully update, then center
    setTimeout(() => {
        centerTree();
        positionHorizontalLines();
    }, 100);
});

document.getElementById('resetView').addEventListener('click', resetView);

// Edit mode toggle - handle clicks on the whole label
document.querySelector('.edit-toggle').addEventListener('click', (e) => {
    e.preventDefault(); // Stop checkbox from toggling immediately
    toggleEditMode();
});

// Side panel
document.getElementById('closePanel').addEventListener('click', closeSidePanel);
document.getElementById('sidePanelOverlay').addEventListener('click', closeSidePanel);
document.getElementById('printNodeBtn').addEventListener('click', printCurrentNode);

// Panel tabs
document.querySelectorAll('.panel-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        switchPanelTab(tab.dataset.tab);
    });
});

// PIN modal
document.getElementById('pinCancel').addEventListener('click', hidePinModal);
document.getElementById('pinSubmit').addEventListener('click', verifyPin);
document.getElementById('pinInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        verifyPin();
    } else if (e.key === 'Escape') {
        hidePinModal();
    }
});

// Navigation
document.querySelectorAll('#nav a').forEach(a => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        const treeName = a.dataset.tree;
        if (treeName) {
            switchTree(treeName);
        }
    });
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
});

// Close menu when clicking a nav link
nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
    }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    const activeEl = document.activeElement;
    const isEditing = activeEl.contentEditable === 'true' ||
                      activeEl.tagName === 'INPUT' ||
                      activeEl.tagName === 'TEXTAREA';

    // Escape to close side panel or deselect node
    if (e.key === 'Escape') {
        if (document.getElementById('pinModalOverlay').classList.contains('visible')) {
            hidePinModal();
        } else if (document.getElementById('sidePanel').classList.contains('open')) {
            closeSidePanel();
        } else if (selectedNodeId) {
            selectNode(null);
        }
    }

    // Don't process other shortcuts if editing text
    if (isEditing) return;

    // E to toggle edit mode
    if (e.key === 'e' || e.key === 'E') {
        toggleEditMode();
    }

    // Arrow keys for node navigation
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        navigateToNode('down');
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        navigateToNode('up');
    } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        navigateToNode('right');
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateToNode('left');
    }

    // Enter to open selected node in side panel
    if (e.key === 'Enter' && selectedNodeId) {
        e.preventDefault();
        openSidePanel(selectedNodeId);
    }

    // / to focus search
    if (e.key === '/') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
});

// Window resize
window.addEventListener('resize', () => {
    positionHorizontalLines();
    centerTree();
});

// ==================== INITIALIZATION ====================

// Load data (async - loads from localStorage first, then syncs with API)
loadTreeData();

// Load PIN from API
loadPINFromAPI();

// Set initial tree attribute
document.body.setAttribute('data-tree', 'revenue');

// Initialize rich text editor
initRichTextEditor();

// Initial render
refreshTree();

// Center the tree initially and reposition lines
setTimeout(() => {
    centerTree();
    positionHorizontalLines();
}, 100);
