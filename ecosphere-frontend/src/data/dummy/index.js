// ============================================================
// DUMMY DATA — All Modules (replaces backend when offline)
// ============================================================

export const dummyDepartments = [
    { _id: 'd1', name: 'Corporate', code: 'CORP', employeeCount: 15, status: 'active' },
    { _id: 'd2', name: 'Manufacturing', code: 'MFG', employeeCount: 150, status: 'active' },
    { _id: 'd3', name: 'Logistics', code: 'LOG', employeeCount: 45, status: 'active' },
    { _id: 'd4', name: 'HR & People', code: 'HR', employeeCount: 30, status: 'active' },
    { _id: 'd5', name: 'IT & Digital', code: 'IT', employeeCount: 60, status: 'active' },
];

export const dummyEmissionFactors = [
    { _id: 'ef1', name: 'Electricity (Grid)', sourceType: 'expense', unit: 'kWh', factorValue: 0.82, status: 'active' },
    { _id: 'ef2', name: 'Diesel Fuel', sourceType: 'fleet', unit: 'Liters', factorValue: 2.68, status: 'active' },
    { _id: 'ef3', name: 'Raw Material Transport', sourceType: 'purchase', unit: 'Tonnes', factorValue: 1.15, status: 'active' },
    { _id: 'ef4', name: 'Natural Gas', sourceType: 'manufacturing', unit: 'cubic meters', factorValue: 2.03, status: 'active' },
    { _id: 'ef5', name: 'Air Travel', sourceType: 'expense', unit: 'km', factorValue: 0.21, status: 'active' },
];

export const dummyCarbonTransactions = [
    { _id: 'ct1', sourceType: 'fleet', department: 'Logistics', emissionFactor: 'Diesel Fuel', quantity: 500, calculatedEmission: 1340, transactionDate: '2026-06-01', isAutoCalculated: true },
    { _id: 'ct2', sourceType: 'expense', department: 'Manufacturing', emissionFactor: 'Electricity (Grid)', quantity: 12000, calculatedEmission: 9840, transactionDate: '2026-06-15', isAutoCalculated: true },
    { _id: 'ct3', sourceType: 'purchase', department: 'Corporate', emissionFactor: 'Raw Material Transport', quantity: 80, calculatedEmission: 92, transactionDate: '2026-07-01', isAutoCalculated: false },
    { _id: 'ct4', sourceType: 'manufacturing', department: 'Manufacturing', emissionFactor: 'Natural Gas', quantity: 300, calculatedEmission: 609, transactionDate: '2026-07-05', isAutoCalculated: true },
];

export const dummyGoals = [
    { _id: 'g1', title: 'Reduce Carbon by 20%', department: 'Manufacturing', targetValue: 10000, currentValue: 8200, unit: 'tCO2e', deadline: '2026-12-31', status: 'on_track' },
    { _id: 'g2', title: 'Fleet Zero Emissions', department: 'Logistics', targetValue: 500, currentValue: 340, unit: 'Liters Saved', deadline: '2026-09-30', status: 'at_risk' },
    { _id: 'g3', title: '100% Renewable Energy', department: 'IT & Digital', targetValue: 100, currentValue: 100, unit: '%', deadline: '2026-06-30', status: 'achieved' },
];

export const dummyCsrActivities = [
    { _id: 'csr1', title: 'Tree Plantation Drive', category: 'csr_activity', department: 'Corporate', startDate: '2026-06-01', endDate: '2026-06-15', maxParticipants: 50, pointsOffered: 100, status: 'completed' },
    { _id: 'csr2', title: 'Beach Cleanup Initiative', category: 'csr_activity', department: 'HR & People', startDate: '2026-07-10', endDate: '2026-07-12', maxParticipants: 30, pointsOffered: 80, status: 'active' },
    { _id: 'csr3', title: 'Blood Donation Camp', category: 'csr_activity', department: 'Manufacturing', startDate: '2026-08-01', endDate: '2026-08-01', maxParticipants: 100, pointsOffered: 150, status: 'upcoming' },
];

export const dummyParticipation = [
    { _id: 'p1', employee: 'John Doe', activity: 'Tree Plantation Drive', proofFile: 'proof1.jpg', approvalStatus: 'approved', pointsEarned: 100, completionDate: '2026-06-15' },
    { _id: 'p2', employee: 'Sarah Jenkins', activity: 'Beach Cleanup Initiative', proofFile: null, approvalStatus: 'pending', pointsEarned: 0, completionDate: null },
    { _id: 'p3', employee: 'Oliver Taylor', activity: 'Tree Plantation Drive', proofFile: 'proof3.jpg', approvalStatus: 'rejected', pointsEarned: 0, completionDate: null },
];

export const dummyPolicies = [
    { _id: 'pol1', title: 'Environmental Protection Policy', version: 'v2.1', category: 'Environmental', effectiveDate: '2026-01-01', status: 'active', requiresAcknowledgement: true },
    { _id: 'pol2', title: 'Employee Code of Conduct', version: 'v1.5', category: 'HR', effectiveDate: '2025-09-01', status: 'active', requiresAcknowledgement: true },
    { _id: 'pol3', title: 'Data Privacy & GDPR Policy', version: 'v3.0', category: 'IT & Governance', effectiveDate: '2026-03-01', status: 'draft', requiresAcknowledgement: false },
];

export const dummyAudits = [
    { _id: 'a1', title: 'Q2 Environmental Audit', auditor: 'External - EY', department: 'Manufacturing', scheduledDate: '2026-07-20', status: 'scheduled', findings: '' },
    { _id: 'a2', title: 'ISO 14001 Compliance Review', auditor: 'Internal Audit Team', department: 'Corporate', scheduledDate: '2026-06-01', completedDate: '2026-06-10', status: 'completed', findings: 'Minor issues found in reporting chain.' },
];

export const dummyComplianceIssues = [
    { _id: 'ci1', audit: 'ISO 14001 Compliance Review', severity: 'high', description: 'Missing emission logs for Q1 Fleet operations', owner: 'Oliver Taylor', dueDate: '2026-07-15', status: 'open', isOverdue: true },
    { _id: 'ci2', audit: 'Q2 Environmental Audit', severity: 'low', description: 'Missing paper trail for recycling disposal', owner: 'Sarah Jenkins', dueDate: '2026-08-30', status: 'in_progress', isOverdue: false },
    { _id: 'ci3', audit: 'ISO 14001 Compliance Review', severity: 'critical', description: 'Wastewater discharge limits exceeded in Sector B', owner: 'John Doe', dueDate: '2026-06-30', status: 'open', isOverdue: true },
];

export const dummyChallenges = [
    { _id: 'ch1', title: 'Cycle to Work Week', category: 'challenge', description: 'Cycle to work for 5 consecutive days and log your commute.', xp: 200, difficulty: 'medium', evidenceRequired: true, deadline: '2026-07-31', status: 'active' },
    { _id: 'ch2', title: 'Zero Waste Workstation', category: 'challenge', description: 'Keep your desk completely waste-free for a month.', xp: 150, difficulty: 'easy', evidenceRequired: false, deadline: '2026-08-31', status: 'active' },
    { _id: 'ch3', title: 'Sustainability Sprint', category: 'challenge', description: 'Attend 3 ESG training modules and pass assessments.', xp: 500, difficulty: 'hard', evidenceRequired: true, deadline: '2026-09-30', status: 'draft' },
    { _id: 'ch4', title: '30-Day Meatless Challenge', category: 'challenge', description: 'Reduce carbon footprint by going meatless for 30 days.', xp: 350, difficulty: 'hard', evidenceRequired: false, deadline: '2026-07-20', status: 'completed' },
];

export const dummyBadges = [
    { _id: 'b1', name: 'Carbon Hero', description: 'Awarded when XP reaches 500', icon: '🌱', unlockRule: { type: 'xp_threshold', value: 500 }, status: 'active' },
    { _id: 'b2', name: 'Green Champion', description: 'Complete 5 challenges', icon: '🏆', unlockRule: { type: 'challenges_completed', value: 5 }, status: 'active' },
    { _id: 'b3', name: 'CSR Star', description: 'Join 3 CSR activities', icon: '⭐', unlockRule: { type: 'csr_count', value: 3 }, status: 'active' },
    { _id: 'b4', name: 'Pioneer', description: 'First 100 XP earned', icon: '🚀', unlockRule: { type: 'xp_threshold', value: 100 }, status: 'active' },
];

export const dummyRewards = [
    { _id: 'r1', name: 'Extra day off', description: 'Redeem for an additional day of leave', pointsRequired: 1000, stock: 10, status: 'active' },
    { _id: 'r2', name: 'Amazon Gift Card ₹500', description: 'Digital voucher redeemable online', pointsRequired: 500, stock: 50, status: 'active' },
    { _id: 'r3', name: 'EcoSphere Branded Kit', description: 'Eco-friendly branded merchandise pack', pointsRequired: 200, stock: 100, status: 'active' },
    { _id: 'r4', name: 'Premium Training Course', description: 'Access to 1 premium Udemy ESG course', pointsRequired: 750, stock: 0, status: 'active' },
];

export const dummyLeaderboard = [
    { rank: 1, name: 'Sarah Jenkins', department: 'IT & Digital', xp: 1200, completedChallenges: 8 },
    { rank: 2, name: 'John Doe', department: 'Corporate', xp: 980, completedChallenges: 6 },
    { rank: 3, name: 'Oliver Taylor', department: 'Manufacturing', xp: 750, completedChallenges: 5 },
    { rank: 4, name: 'Emma Watson', department: 'HR & People', xp: 600, completedChallenges: 4 },
    { rank: 5, name: 'James Carter', department: 'Logistics', xp: 450, completedChallenges: 3 },
];

export const dummyDeptScores = [
    { department: 'Corporate', environmentalScore: 88, socialScore: 76, governanceScore: 90, totalScore: 84.8 },
    { department: 'Manufacturing', environmentalScore: 72, socialScore: 68, governanceScore: 80, totalScore: 73.2 },
    { department: 'Logistics', environmentalScore: 65, socialScore: 74, governanceScore: 85, totalScore: 73.4 },
    { department: 'HR & People', environmentalScore: 90, socialScore: 92, governanceScore: 88, totalScore: 90.2 },
    { department: 'IT & Digital', environmentalScore: 95, socialScore: 85, governanceScore: 78, totalScore: 87.4 },
];
