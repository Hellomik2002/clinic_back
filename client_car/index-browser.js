
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.8.1
 * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
 */
Prisma.prismaVersion = {
  client: "4.8.1",
  engine: "d6e67a83f971b175a593ccc12e15c4a757f93ffe"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AccountScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
});

exports.Prisma.ApiKeyScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  note: 'note',
  createdAt: 'createdAt',
  expiresAt: 'expiresAt',
  lastUsedAt: 'lastUsedAt',
  hashedKey: 'hashedKey',
  appId: 'appId'
});

exports.Prisma.AppScalarFieldEnum = makeEnum({
  slug: 'slug',
  dirName: 'dirName',
  keys: 'keys',
  categories: 'categories',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  enabled: 'enabled'
});

exports.Prisma.App_RoutingForms_FormResponseScalarFieldEnum = makeEnum({
  id: 'id',
  formFillerId: 'formFillerId',
  formId: 'formId',
  response: 'response',
  createdAt: 'createdAt'
});

exports.Prisma.App_RoutingForms_FormScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description',
  routes: 'routes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name',
  fields: 'fields',
  userId: 'userId',
  disabled: 'disabled',
  settings: 'settings'
});

exports.Prisma.AttendeeScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  name: 'name',
  timeZone: 'timeZone',
  locale: 'locale',
  bookingId: 'bookingId'
});

exports.Prisma.AvailabilityScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  eventTypeId: 'eventTypeId',
  days: 'days',
  startTime: 'startTime',
  endTime: 'endTime',
  date: 'date',
  scheduleId: 'scheduleId'
});

exports.Prisma.BookingReferenceScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  uid: 'uid',
  meetingId: 'meetingId',
  meetingPassword: 'meetingPassword',
  meetingUrl: 'meetingUrl',
  bookingId: 'bookingId',
  externalCalendarId: 'externalCalendarId',
  deleted: 'deleted',
  credentialId: 'credentialId'
});

exports.Prisma.BookingScalarFieldEnum = makeEnum({
  id: 'id',
  uid: 'uid',
  userId: 'userId',
  eventTypeId: 'eventTypeId',
  title: 'title',
  description: 'description',
  customInputs: 'customInputs',
  startTime: 'startTime',
  endTime: 'endTime',
  location: 'location',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  status: 'status',
  paid: 'paid',
  destinationCalendarId: 'destinationCalendarId',
  cancellationReason: 'cancellationReason',
  rejectionReason: 'rejectionReason',
  dynamicEventSlugRef: 'dynamicEventSlugRef',
  dynamicGroupSlugRef: 'dynamicGroupSlugRef',
  rescheduled: 'rescheduled',
  fromReschedule: 'fromReschedule',
  recurringEventId: 'recurringEventId',
  smsReminderNumber: 'smsReminderNumber',
  scheduledJobs: 'scheduledJobs',
  metadata: 'metadata'
});

exports.Prisma.CredentialScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  key: 'key',
  userId: 'userId',
  appId: 'appId',
  invalid: 'invalid'
});

exports.Prisma.DestinationCalendarScalarFieldEnum = makeEnum({
  id: 'id',
  integration: 'integration',
  externalId: 'externalId',
  userId: 'userId',
  eventTypeId: 'eventTypeId',
  credentialId: 'credentialId'
});

exports.Prisma.EventTypeCustomInputScalarFieldEnum = makeEnum({
  id: 'id',
  eventTypeId: 'eventTypeId',
  label: 'label',
  type: 'type',
  options: 'options',
  required: 'required',
  placeholder: 'placeholder'
});

exports.Prisma.EventTypeScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  slug: 'slug',
  description: 'description',
  position: 'position',
  locations: 'locations',
  length: 'length',
  hidden: 'hidden',
  userId: 'userId',
  teamId: 'teamId',
  eventName: 'eventName',
  timeZone: 'timeZone',
  periodType: 'periodType',
  periodStartDate: 'periodStartDate',
  periodEndDate: 'periodEndDate',
  periodDays: 'periodDays',
  periodCountCalendarDays: 'periodCountCalendarDays',
  requiresConfirmation: 'requiresConfirmation',
  recurringEvent: 'recurringEvent',
  disableGuests: 'disableGuests',
  hideCalendarNotes: 'hideCalendarNotes',
  minimumBookingNotice: 'minimumBookingNotice',
  beforeEventBuffer: 'beforeEventBuffer',
  afterEventBuffer: 'afterEventBuffer',
  seatsPerTimeSlot: 'seatsPerTimeSlot',
  seatsShowAttendees: 'seatsShowAttendees',
  schedulingType: 'schedulingType',
  scheduleId: 'scheduleId',
  price: 'price',
  currency: 'currency',
  slotInterval: 'slotInterval',
  metadata: 'metadata',
  successRedirectUrl: 'successRedirectUrl',
  bookingLimits: 'bookingLimits'
});

exports.Prisma.FeedbackScalarFieldEnum = makeEnum({
  id: 'id',
  date: 'date',
  userId: 'userId',
  rating: 'rating',
  comment: 'comment'
});

exports.Prisma.HashedLinkScalarFieldEnum = makeEnum({
  id: 'id',
  link: 'link',
  eventTypeId: 'eventTypeId'
});

exports.Prisma.HostScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  eventTypeId: 'eventTypeId',
  isFixed: 'isFixed'
});

exports.Prisma.ImpersonationsScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  impersonatedUserId: 'impersonatedUserId',
  impersonatedById: 'impersonatedById'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
});

exports.Prisma.JsonNullValueInput = makeEnum({
  JsonNull: Prisma.JsonNull
});

exports.Prisma.MembershipScalarFieldEnum = makeEnum({
  teamId: 'teamId',
  userId: 'userId',
  accepted: 'accepted',
  role: 'role',
  disableImpersonation: 'disableImpersonation'
});

exports.Prisma.NullableJsonNullValueInput = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
});

exports.Prisma.PaymentScalarFieldEnum = makeEnum({
  id: 'id',
  uid: 'uid',
  type: 'type',
  bookingId: 'bookingId',
  amount: 'amount',
  fee: 'fee',
  currency: 'currency',
  success: 'success',
  refunded: 'refunded',
  data: 'data',
  externalId: 'externalId'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.ReminderMailScalarFieldEnum = makeEnum({
  id: 'id',
  referenceId: 'referenceId',
  reminderType: 'reminderType',
  elapsedMinutes: 'elapsedMinutes',
  createdAt: 'createdAt'
});

exports.Prisma.ResetPasswordRequestScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  email: 'email',
  expires: 'expires'
});

exports.Prisma.ScheduleScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  name: 'name',
  timeZone: 'timeZone'
});

exports.Prisma.SelectedCalendarScalarFieldEnum = makeEnum({
  userId: 'userId',
  integration: 'integration',
  externalId: 'externalId'
});

exports.Prisma.SessionScalarFieldEnum = makeEnum({
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TeamScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  slug: 'slug',
  logo: 'logo',
  bio: 'bio',
  hideBranding: 'hideBranding',
  hideBookATeamMember: 'hideBookATeamMember',
  createdAt: 'createdAt',
  metadata: 'metadata'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  username: 'username',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  password: 'password',
  bio: 'bio',
  avatar: 'avatar',
  timeZone: 'timeZone',
  weekStart: 'weekStart',
  startTime: 'startTime',
  endTime: 'endTime',
  bufferTime: 'bufferTime',
  hideBranding: 'hideBranding',
  theme: 'theme',
  createdDate: 'createdDate',
  trialEndsAt: 'trialEndsAt',
  defaultScheduleId: 'defaultScheduleId',
  completedOnboarding: 'completedOnboarding',
  locale: 'locale',
  timeFormat: 'timeFormat',
  twoFactorSecret: 'twoFactorSecret',
  twoFactorEnabled: 'twoFactorEnabled',
  identityProvider: 'identityProvider',
  identityProviderId: 'identityProviderId',
  invitedTo: 'invitedTo',
  brandColor: 'brandColor',
  darkBrandColor: 'darkBrandColor',
  away: 'away',
  allowDynamicBooking: 'allowDynamicBooking',
  metadata: 'metadata',
  verified: 'verified',
  role: 'role',
  disableImpersonation: 'disableImpersonation'
});

exports.Prisma.VerificationTokenScalarFieldEnum = makeEnum({
  id: 'id',
  identifier: 'identifier',
  token: 'token',
  expires: 'expires',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.VerifiedNumberScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  phoneNumber: 'phoneNumber'
});

exports.Prisma.WebhookScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  eventTypeId: 'eventTypeId',
  subscriberUrl: 'subscriberUrl',
  payloadTemplate: 'payloadTemplate',
  createdAt: 'createdAt',
  active: 'active',
  eventTriggers: 'eventTriggers',
  appId: 'appId',
  secret: 'secret'
});

exports.Prisma.WorkflowReminderScalarFieldEnum = makeEnum({
  id: 'id',
  bookingUid: 'bookingUid',
  method: 'method',
  scheduledDate: 'scheduledDate',
  referenceId: 'referenceId',
  scheduled: 'scheduled',
  workflowStepId: 'workflowStepId'
});

exports.Prisma.WorkflowScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  userId: 'userId',
  trigger: 'trigger',
  time: 'time',
  timeUnit: 'timeUnit'
});

exports.Prisma.WorkflowStepScalarFieldEnum = makeEnum({
  id: 'id',
  stepNumber: 'stepNumber',
  action: 'action',
  workflowId: 'workflowId',
  sendTo: 'sendTo',
  reminderBody: 'reminderBody',
  emailSubject: 'emailSubject',
  template: 'template',
  numberRequired: 'numberRequired',
  sender: 'sender',
  numberVerificationPending: 'numberVerificationPending'
});

exports.Prisma.WorkflowsOnEventTypesScalarFieldEnum = makeEnum({
  id: 'id',
  workflowId: 'workflowId',
  eventTypeId: 'eventTypeId'
});
exports.AppCategories = makeEnum({
  calendar: 'calendar',
  messaging: 'messaging',
  other: 'other',
  payment: 'payment',
  video: 'video',
  web3: 'web3',
  automation: 'automation',
  analytics: 'analytics'
});

exports.BookingStatus = makeEnum({
  CANCELLED: 'CANCELLED',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  PENDING: 'PENDING'
});

exports.EventTypeCustomInputType = makeEnum({
  TEXT: 'TEXT',
  TEXTLONG: 'TEXTLONG',
  NUMBER: 'NUMBER',
  BOOL: 'BOOL',
  RADIO: 'RADIO',
  PHONE: 'PHONE'
});

exports.IdentityProvider = makeEnum({
  CAL: 'CAL',
  GOOGLE: 'GOOGLE',
  SAML: 'SAML'
});

exports.MembershipRole = makeEnum({
  MEMBER: 'MEMBER',
  ADMIN: 'ADMIN',
  OWNER: 'OWNER'
});

exports.PaymentType = makeEnum({
  STRIPE: 'STRIPE'
});

exports.PeriodType = makeEnum({
  UNLIMITED: 'UNLIMITED',
  ROLLING: 'ROLLING',
  RANGE: 'RANGE'
});

exports.ReminderType = makeEnum({
  PENDING_BOOKING_CONFIRMATION: 'PENDING_BOOKING_CONFIRMATION'
});

exports.SchedulingType = makeEnum({
  ROUND_ROBIN: 'ROUND_ROBIN',
  COLLECTIVE: 'COLLECTIVE'
});

exports.TimeUnit = makeEnum({
  DAY: 'DAY',
  HOUR: 'HOUR',
  MINUTE: 'MINUTE'
});

exports.UserPermissionRole = makeEnum({
  USER: 'USER',
  ADMIN: 'ADMIN'
});

exports.WebhookTriggerEvents = makeEnum({
  BOOKING_CREATED: 'BOOKING_CREATED',
  BOOKING_RESCHEDULED: 'BOOKING_RESCHEDULED',
  BOOKING_CANCELLED: 'BOOKING_CANCELLED',
  FORM_SUBMITTED: 'FORM_SUBMITTED',
  MEETING_ENDED: 'MEETING_ENDED'
});

exports.WorkflowActions = makeEnum({
  EMAIL_HOST: 'EMAIL_HOST',
  EMAIL_ATTENDEE: 'EMAIL_ATTENDEE',
  SMS_ATTENDEE: 'SMS_ATTENDEE',
  SMS_NUMBER: 'SMS_NUMBER',
  EMAIL_ADDRESS: 'EMAIL_ADDRESS'
});

exports.WorkflowMethods = makeEnum({
  EMAIL: 'EMAIL',
  SMS: 'SMS'
});

exports.WorkflowTemplates = makeEnum({
  REMINDER: 'REMINDER',
  CUSTOM: 'CUSTOM'
});

exports.WorkflowTriggerEvents = makeEnum({
  BEFORE_EVENT: 'BEFORE_EVENT',
  EVENT_CANCELLED: 'EVENT_CANCELLED',
  NEW_EVENT: 'NEW_EVENT',
  AFTER_EVENT: 'AFTER_EVENT',
  RESCHEDULE_EVENT: 'RESCHEDULE_EVENT'
});

exports.Prisma.ModelName = makeEnum({
  Host: 'Host',
  EventType: 'EventType',
  Credential: 'Credential',
  DestinationCalendar: 'DestinationCalendar',
  User: 'User',
  Team: 'Team',
  Membership: 'Membership',
  VerificationToken: 'VerificationToken',
  BookingReference: 'BookingReference',
  Attendee: 'Attendee',
  Booking: 'Booking',
  Schedule: 'Schedule',
  Availability: 'Availability',
  SelectedCalendar: 'SelectedCalendar',
  EventTypeCustomInput: 'EventTypeCustomInput',
  ResetPasswordRequest: 'ResetPasswordRequest',
  ReminderMail: 'ReminderMail',
  Payment: 'Payment',
  Webhook: 'Webhook',
  Impersonations: 'Impersonations',
  ApiKey: 'ApiKey',
  HashedLink: 'HashedLink',
  Account: 'Account',
  Session: 'Session',
  App: 'App',
  App_RoutingForms_Form: 'App_RoutingForms_Form',
  App_RoutingForms_FormResponse: 'App_RoutingForms_FormResponse',
  Feedback: 'Feedback',
  WorkflowStep: 'WorkflowStep',
  Workflow: 'Workflow',
  WorkflowsOnEventTypes: 'WorkflowsOnEventTypes',
  WorkflowReminder: 'WorkflowReminder',
  VerifiedNumber: 'VerifiedNumber'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
