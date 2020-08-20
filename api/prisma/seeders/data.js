const bcrypt = require('bcryptjs')

const hash = bcrypt.hashSync('secret', 10)
const date = new Date("January 1, 1990 01:00:00");

const users = [
  {
    name: 'John Doe',
    email: 'johndoe@example.org',
    password: hash,
    status: 'verified',
    address: '2176  Trails End Road',
    city: 'Palo Alto',
    country: 'USA',
    state: 'California',
    date_of_birth: date,
    post_code: '000000',
    phone_number: '+1 111-111-1111'
  },
  {
    name: 'Jane Doe',
    email: 'janedoe@example.org',
    password: hash,
    status: 'verified',
    address: '2176  Trails End Road',
    city: 'Palo Alto',
    country: 'USA',
    state: 'California',
    date_of_birth: date,
    post_code: '000000',
    phone_number: '+1 111-111-1111'
  },
  {
    name: 'Jack Doe',
    email: 'jackdoe@example.org',
    password: hash,
    status: 'pending',
    address: '2176  Trails End Road',
    city: 'Palo Alto',
    country: 'USA',
    state: 'California',
    date_of_birth: date,
    post_code: '000000',
    phone_number: '+1 111-111-1111'
  },
  {
    name: 'Jeffrey Doe',
    email: 'jeffreydoe@example.org',
    password: hash,
    status: 'verified',
    address: '2176  Trails End Road',
    city: 'Palo Alto',
    country: 'USA',
    state: 'California',
    date_of_birth: date,
    post_code: '000000',
    phone_number: '+1 111-111-1111'
  },
  {
    name: 'Jason Doe',
    email: 'jasondoe@example.org',
    password: hash,
    status: 'unverified',
    address: '2176  Trails End Road',
    city: 'Palo Alto',
    country: 'USA',
    state: 'California',
    date_of_birth: date,
    post_code: '000000',
    phone_number: '+1 111-111-1111'
  },
  {
    name: 'Jennifer Doe',
    email: 'jenniferdoe@example.org',
    password: hash,
    status: 'verified',
    address: '2176  Trails End Road',
    city: 'Palo Alto',
    country: 'USA',
    state: 'California',
    date_of_birth: date,
    post_code: '000000',
    phone_number: '+1 111-111-1111'
  },
  {
    name: 'Jessica Doe',
    email: 'jessicadoe@example.org',
    password: hash,
    status: 'pending',
    address: '2176  Trails End Road',
    city: 'Palo Alto',
    country: 'USA',
    state: 'California',
    date_of_birth: date,
    post_code: '000000',
    phone_number: '+1 111-111-1111'
  },
  {
    name: 'Jeremy Doe',
    email: 'jeremydoe@example.org',
    password: hash,
    status: 'unverified',
    address: '2176  Trails End Road',
    city: 'Palo Alto',
    country: 'USA',
    state: 'California',
    date_of_birth: date,
    post_code: '000000',
    phone_number: '+1 111-111-1111'
  },
  {
    name: 'Jacob Doe',
    email: 'jacobdoe@example.org',
    password: hash,
    status: 'verified',
    address: '2176  Trails End Road',
    city: 'Palo Alto',
    country: 'USA',
    state: 'California',
    date_of_birth: date,
    post_code: '000000',
    phone_number: '+1 111-111-1111'
  },
  {
    name: 'Justin Doe',
    email: 'justindoe@example.org',
    password: hash,
    status: 'verified',
    address: '2176  Trails End Road',
    city: 'Palo Alto',
    country: 'USA',
    state: 'California',
    date_of_birth: date,
    post_code: '000000',
    phone_number: '+1 111-111-1111'
  },
  {
    name: 'Joy Doe',
    email: 'joydoe@example.org',
    password: hash,
    status: 'verified',
    address: '2176  Trails End Road',
    city: 'Palo Alto',
    country: 'USA',
    state: 'California',
    date_of_birth: date,
    post_code: '000000',
    phone_number: '+1 111-111-1111'
  }
]

const managers = [
  { user_id: 1, },
  { user_id: 2 },
  { user_id: 10 },
  { user_id: 11 },
]

const manager_user = [
  { manager_id: 1, user_id: 2 },
  { manager_id: 1, user_id: 3 },
  { manager_id: 1, user_id: 4 },
  { manager_id: 1, user_id: 5 },
  { manager_id: 1, user_id: 6 },
  { manager_id: 1, user_id: 7 },
  { manager_id: 1, user_id: 8 },
  { manager_id: 1, user_id: 9 },
  { manager_id: 2, user_id: 1 },
]

exports.users = users
exports.managers = managers
exports.manager_user = manager_user
