// Array Example: Batch notification system
// Real-world use: Storing a list of user emails for notifications

const userEmails = [
  'alice@example.com',
  'bob@example.com',
  'carol@example.com'
];

// Send notification to each user
userEmails.forEach(email => {
  console.log(`Sending notification to ${email}`);
});

// Searching for a user
const searchEmail = 'bob@example.com';
const found = userEmails.includes(searchEmail);
console.log(`User found: ${found}`);
