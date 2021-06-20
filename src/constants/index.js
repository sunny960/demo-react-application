/**
 * Created by Ayush Kulshrestha on 18/09/2019.
 */


export const httpConstants = {
    METHOD_TYPE: {
        POST: 'POST',
        PUT: 'PUT',
        GET: 'GET',
        DELETE: 'DELETE',
    },
    CONTENT_TYPE: {
        APPLICATION_JSON: 'application/json',
        MULTIPART_FORM_DATA: 'multipart/form-data',
        APPLICATION_FORM_URLENCODED: 'application/x-www-form-urlencoded',
        IMAGE_PNG: 'image/png'
    },
    DEVICE_TYPE: {
        WEB: 'web'
    },
    API_END_POINT: {
        //COMPANY_SERVICE_END_POINTS
        COMPANY_DETAILS: "/company",
        COMPANY_DETAILS_USING_LIMB_ID: "/company/limb-id",
        ADD_COMPANY_DETAILS: "/add-company",
        GET_LENDERS_LIST: "/add-relation",
        GET_ASSOCIATE: "/get-associate",
        INVITE_ASSOCIATE: "/invite-associate",
        GET_COMPANY_BASED_ON_ITS_TYPE: "/company",
        GET_COMPANY_BASED_ON_ITS_STATUS: "/companies",
        INVITE_COUNSEL: "/invite-counsel",

        //RECORD_SERVICE_END_POINT
        ADD_RECORD_DETAILS: "/add-record",
        RECORD_DETAILS: "/record/",
        UPDATE_RECORD: "/record",
        SECTION_DETAILS: "/section/",
        UPDATE_STATUS: "/update-status",
        QUESTION_DETAILS: "/question/",
        RECORD_LIST: "/record-list",
        SECTION_LIST: "/section-list/",
        QUESTION_LIST: "/question-list/",
        ACTIVITY_LIST: "/get-activities",
        INVITATION: "/invitation/",
        RECORD_FILTERS: "/record-filter",
        SEARCH_CRITERIA: "/search-criteria",

        //USER_SERVICE_END_POINTS

        REGISTER_DEVICE: '/register-device',
        REGISTER_USER: '/register',
        LOGIN: '/login',
        LOGOUT: '/logout',
        GET_ROLE_LIST: '/get-role-list',
        GET_USER_DETAILS: '/get-user-details',
        GET_USER_LIST: '/get-users',
        DELETE_USER: '/delete-user',
        GET_USER_LIST_BY_QUERY_OBJ: '/get-user-list-by-queryObj',
        GET_PERMISSION_LIST: '/get-permission-list',
        RESET_PASSWORD: '/reset-password',
        CHANGE_PASSWORD: '/change-password',
        UPDATE_USER: '/update-user',
        FORGOT_PASSWORD: '/forgot-password',
        USER_PROFILE: '/user-profile',
        PROFILE_DETAILS: '/profile-details',
        ADD_PROFILE: '/add-profile',
        ADD_USER_ADDRESS: '/add-user-address',
        //INVITE_SERVICE_END_POINTS
        INVITE_USER: '/invite-user',

        //DOCUMENT_SERVICE_END_POINTS
        ADD_DOCUMENTS: '/add-documents',
        PLANS: '/plans',
        SUBSCRIPTION: '/subscription',
        INVOICES: '/invoices',
        DOCUMENT: '/document',
        CREATE_REPORT: '/report',
        GET_DOCUMENTS: '/get-documents',

        //NOTIFICATION_SERVICE_END_POINTS
        NOTIFICATION_LIST: '/notification-list',
        NOTIFICATION_COUNT: '/notification-count',
        MARK_BULK_NOTIFICATION_READ: '/mark-bulk-notification-read',

        //PUBLISH_RECORD_MICRO_SERVICE
        PUBLISH: '/publish',
        PUBLISH_REQUEST_LIST: '/publish-request-list',
        PUBLISH_REQUEST_LIST_BY_COMPANY: '/request-list',
        PUBLISH_REQUEST: '/publish-request',
        STATE_PUBLISH: '/state-publish',
        STATE_TRANSFER: '/state-transfer',

        STORE_LIST: '/store-list',
        STORE: '/store',
        PRODUCT: '/product',
        GET_PRODUCT_LIST_BY_QUERY: '/get-product-list-by-query',
    }
};

export const genericConstants = {
    FILE_NAME: {
        REP_EXCEPTION: 'repException',
        SERVICING_ON_BOARDING: 'ServicingOnBoarding',
        OWNER_BORROWER: 'ownerBorrower',
        DUE_DILIGENCE: 'dueDiligence',
        REPO_REVIEW: 'repoReview'
    },
    ACCEPTED_IMAGE_FORMATS: ".jpg, .jpeg, .png, .svg",
    FILTERS: ["fileNo", "status", "lender", "originationCounsel", "sellerCounsel", "pool", "state", "city", "lat", "lng"],
    STATUS: {
        ADD_TO_CART: "ADD_TO_CART",
        SAVE_FOR_LATER: "SAVE_FOR_LATER",
        IN_PROGRESS: "IN_PROGRESS",
        ORDERED: "ORDERED",
        DISPATCHED: "DISPATCHED",
        DELIVERED: "DELIVERED",
    },
    COMPANY_STATUS: {
        PENDING: "PENDING",
        ACTIVE: "ACTIVE",
        COMPLETED: "COMPLETED",
        ACCEPTED: "ACCEPTED"
    },
    REQUEST_TYPE: {
        SECTION_STATUS_CHANGED: "SECTION_STATUS_CHANGED",
        QUESTION_STATUS_CHANGED: "QUESTION_STATUS_CHANGED",

    },
    ACTION_TYPE: {
        UPDATE_PROFILE_IMAGE: "UPDATE_PROFILE_IMAGE",
        UPDATE_COMPANY_IMAGE: "UPDATE_COMPANY_IMAGE",
    },
    CRITERIA_TYPE: {
        TEXT: "TEXT",
        CALENDER_RANGE: "CALENDER_RANGE",
        AMOUNT_RANGE: "AMOUNT_RANGE",
        AMOUNT: "AMOUNT",
        QUESTION_CHECKBOX: "QUESTION_CHECKBOX",
        CHECKBOX: "CHECKBOX"
    },
    QUERY_OBJECT_KEY: {
        QUERY_OBJECT: "queryObj",
        POSTED_TO: "postedTo",
        PAYLOAD_SEND_TO_USER_ID: 'payload.sendTo._id',
        IS_CLEARED: 'isCleared',
        IS_READ: 'isRead',
        PAYLOAD_SEND_FROM_USER_ID: 'payload.sentFrom._id',
        PAYLOAD_COMPANY_ID: 'payload.company.id',
        PAYLOAD_IS_FOR_EMPLOYEE: 'payload.isForEmployee',
        PAYLOAD_NOTIFICATION_TYPE: 'payload.notificationType',
        TYPE: 'type',
        SELECTION_STRING: "selectionString",
        NOTIFICATION_ID_ARRAY: "notificationIDArray",
    },
    RECORD_STATUS: {
        PUBLISHED: "PUBLISHED",
        REJECTED: "REJECTED"
    },
    ACTIVITY_TYPE: {
        ASSIGNMENT_FOR_REVIEW: "ASSIGNMENT_FOR_REVIEW",
        APPROVAL_FOR_SC_REVIEW: "APPROVAL_FOR_SC_REVIEW",
        REJECTION: "REJECTION",
        REJECTION_BY_SC: "REJECTION_BY_SC",
        APPROVAL_BY_SC: "APPROVAL_BY_SC"
    },
    RECORD_DETAILS_MENU_OPTION: {
        TRANSFER: "TRANSFER",
        PUBLISH: "PUBLISH",
    },
    PLAN_NAME: {
        LOAN_SELLER_COUNSEL: 'Loan Seller Counsel',
        LOAN_ORIGINATION_COUNSEL: 'Loan Origination Counsel',
        LOAN_SELLER: 'Loan Seller',
    },
    SUBSCRIPTION_TYPE: {
        MONTHLY: "MONTHLY",
        YEARLY: "YEARLY"
    },
    SUBSCRIPTION_PLAN: {
        YEARLY: "YEARLY",
        MONTHLY: "MONTHLY",
    },
    SUBSCRIPTION_PLAN_TEXT: {
        YEARLY: "Annually",
        MONTHLY: "Monthly",
    },

};

export const eventConstants = {

    SHOW_LOADER: "SHOW_LOADER",
    HIDE_LOADER: "HIDE_LOADER",

    GET_COMPANY_SUCCESS: "GET_COMPANY_SUCCESS",
    GET_COMPANY_FAILURE: "GET_COMPANY_FAILURE",

    UPDATE_COMPANY_SUCCESS: "UPDATE_COMPANY_SUCCESS",
    UPDATE_COMPANY_FAILURE: "UPDATE_COMPANY_FAILURE",

    SIGN_UP_SUCCESS: "SIGN_UP_SUCCESS",
    PROFILE_CREATED: "PROFILE_CREATED",
    GET_USER_DETAILS_SUCCESS: "GET_USER_DETAILS_SUCCESS",
    GET_USER_PERMISSION_SUCCESS: "GET_USER_PERMISSION_SUCCESS",

    REGISTER_DEVICE_SUCCESS: "REGISTER_DEVICE_SUCCESS",
    REGISTER_DEVICE_FAILURE: "REGISTER_DEVICE_FAILURE",

    ADD_RECORD_SUCCESS: "ADD_RECORD_SUCCESS",
    ADD_RECORD_FAILURE: "ADD_RECORD_FAILURE",

    GET_RECORD_LIST_REQUESTED: "GET_RECORD_LIST_REQUESTED",
    GET_RECORD_LIST_SUCCESS: "GET_RECORD_LIST_SUCCESS",
    GET_RECORD_LIST_FAILURE: "GET_RECORD_LIST_FAILURE",

    SET_SECTION: "SET_SECTION",
    SECTION_LIST: "SECTION_LIST",

    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',

    REVIEW_PUBLISH_REQUEST: 'REVIEW_PUBLISH_REQUEST'
};

export const actionTypeConstants = {

    ADD_SUB_LENDER: "ADD_SUB_LENDER",
    ADD_SUB_USER: "ADD_SUB_USER",
    ADD_ORIGINATION_COUNSEL: "ADD_ORIGINATION_COUNSEL",
    ADD_SELLER_COUNSEL: "ADD_SELLER_COUNSEL",
    ADD_SUB_USER_TEXT: "Add Sub-Users",
    ADD_ORIGINATION_COUNSEL_TEXT: "Add Origination Counsel",
    ADD_SELLER_COUNSEL_TEXT: "Add Seller Counsel",
};

export const apiSuccessConstants = {

    GET_RECORD_LIST: "Record List fetched successfully!",
    ACTIVATE_COMPANY: "Account Activated - User will be notified",
    DELETE_DOCUMENT: "Document has been deleted successfully ",
};
export const apiFailureConstants = {

    GET_STORE_ITEM_LIST: "Unable to fetch Store item List!",
    SEARCH_BY_CRITERIA: "Unable to apply Filter!!",
    GET_RECORD_LIST: "Unable to fetch Record List!",
    UPLOAD_PROPERTY_PHOTO: "Unable to upload property photo",
    UPLOAD_PHOTO: "Unable to upload photo!",
    UPLOAD_DOCUMENT: "Unable to upload document",
    UPLOAD_INVOICE: "Unable to upload invoice",
    VIEW_DOCUMENT: "Unable to View document",
    VIEW_INVOICE: "Unable to View invoice",
    GET_DOCUMENT: "Unable to get document",
    DELETE_DOCUMENT: "Unable to delete document",
    NO_DOCUMENT: "Document not found",
    PARAMETER_VIEW_DOCUMENT: "Invalid parameter to View Document",
    SELECT_REPORT_TYPE: "Please Select the Report Type",
    SELECT_RECORD: "Please Select a Record",
    SELECT_SINGLE_RECORD: "Please Select a Single Record",
    EXPORT_REPORT: "Unable to Export Report",
    LOGOUT: "Unable to Logout current User",
    ACTIVATE_COMPANY: "Unable to Activate Company Account",
    SUBSCRIPTION_DATA_NOT_FOUND: "Subscription Data not found",
    PUBLISH_REQUEST_DELETED: "Unable to delete the publish request!",
};


export const stringConstants = {
    DOWNLOAD_PRIVATE_KEY: "Download Private Key",
    ACTIVATION_PENDING_HEADER: "Activation Pending",
    SETUP_COMPANY_HEADER: "Setup your Company Profile",
    ACTIVATION_PENDING_DETAIL: "Your account will be activated once your wire transfer is confirmed by LIMB admin." +
        " You will be notified via your registered email.",
    SETUP_COMPANY_DETAIL: "Creating your company profile helps other counsels to search you and connect with you on LIMB plaform",
    CONTACT_ON_QUERY: "You can contact support@limbcre.com in case you have any questions.",
    SUPPORT_EMAIL: process.env.REACT_APP_SUPPORT_EMAIL || "support@limbcre.com",
    INVALID_EMAIL: "Invalid email address",
    EMPTY_CONTACT_EMAIL: "Contact email cannot be empty",
    EMPTY_PRIMARY_CONTACT: "Primary contact cannot be empty",
    EMPTY_COMPANY_WEBSITE: "Company website cannot be empty",
    EMPTY_COMPANY_LOGO: "Please upload company logo",
    EMPTY_FILE_NUMBER: "File Number cannot be empty",
    EMPTY_PROPERTY_PHOTO: "Please Upload the property Photo",
    EMPTY_INVOICE_NUMBER: "Please enter invoice number",
    EMPTY_INVOICE_AMOUNT: "Please enter invoice amount",
    EMPTY_DOCUMENT_CATEGORY: "Please Select the Category",
    EMPTY_DOCUMENT_CATEGORY_TYPE: "Please Select the Category Type",
    EMPTY_LOAN_TAG: "Loan Tag cannot be empty",
    EMPTY_PROPERTY_ADDRESS: "Property Address cannot be empty",
    EMPTY_PROPERTY_TYPE: "Property Type cannot be empty",
    EMPTY_CITY: "City cannot be empty",
    EMPTY_STATE: "State cannot be empty",
    EMPTY_COUNTRY: "Country cannot be empty",
    EMPTY_SUB_LENDER: "Sub Lender cannot be empty",
    EMPTY_OC: "Organisation Counsel cannot be empty",
    EMPTY_NAME: "Name cannot be empty",
    EMPTY_PASSWORD: "Password cannot be empty",
    EMPTY_EMAIL: "Email cannot be empty",
    EMPTY_LOCATION: "Location cannot be empty",
    EMPTY_ROLE_LEVEL: "Role Level cannot be empty",
    EMPTY_COMPANY_NAME: "Company Name cannot be empty",
    EMPTY_STREET_ADDRESS: "Street Address cannot be empty",
    EMPTY_SUITE: "Suite cannot be empty",
    EMPTY_SELLER_COUNSEL: "Seller Counsel cannot be empty",
    INVALID_NAME: "First letter should be capital",

    PASSWORD_VALIDATION: "Password should contain at least 1 capital letter, 1 special character and a minimum length of 8 characters",
    PASSWORD_DO_NOT_MATCH: "Passwords do not match",
    INVITATION_LINK_EXPIRED: "Invitation Link Expired!",
    LINK_EXPIRED: "Link Expired!",
    ACCOUNT_CREATED_SUCCESSFULLY: "Account created successfully",
    PASSWORD_RESET_SUCCESSFULLY: "Password changed successfully",
    PROFILE_PICTURE_UPDATED_SUCCESSFULLY: "Profile picture updated successfully!",
    PASSWORD_UPDATED_SUCCESSFULLY: "Password changed successfully!",
    INVITATION_PENDING: "Invitation Pending",
    REVIEW_PENDING: "Review Pending",
    ACTIVE: "Active",
    REJECTED: "Rejected",
    DELETED: "Deleted",
    INACTIVE: "Inactive",
    INCOMPLETE_SECTION: "Section is not completed yet! It is having some incomplete questions!",
    PLEASE_FILL_THIS_FIELD: "Please fill this field",
    INVITE_LENDER: "Invite New Lender",
    UPDATE_LENDER: "Update Lender",
    INVITE_OC: "Invite New Origination Counsel",
    INVITE_SC: "Invite New Loan Seller Counsel",
    EMPTY_FIELD: "This field cannot be empty",

    INVITE: "Invite",
    UPDATE: "Update",
    PUBLISH: 'Publish',
    REJECT: 'Reject',

    CONFIRM_DELETE_INVITATION: "Are you sure you want to delete this invitation?",
    CONFIRM_RESEND_INVITATION: "Are you sure you want to resend this invitation?",
    CONFIRM_LOGOUT: "Are you sure you want to log out of this account?",
    CONFIRM_DELETE_DOCUMENT: "Are you sure you want to delete this Document?",
    CONFIRM_ACTIVATE_ACCOUNT: "Are you sure you want to activate this account?",
    RESEND: "resend",
    DELETE: "delete",
    LOGOUT: "logout",
    DEFAULT: "default",
};


export const pathConstants = {
    LOGIN: '/',
    SIGN_UP: '/sign-up',
    DASHBOARD_MENU: {
        HOME: '/dashboard/home',
        STORE: '/dashboard/store',
        MY_CART: '/dashboard/myCart',
        PROFILE: '/dashboard/profile',
        ENQUIRY: '/dashboard/enquiry',
        FEEDBACK: '/dashboard/feedback',
        ADDRESS: '/dashboard/address',

    }
};

export const cookiesConstants = {
    DEVICE_ID: 'deviceId',
    SESSION_TOKEN: 'sessionToken',
    USER: 'user',
    USER_ID: 'userID',
    USER_PERMISSION: 'userPermission',
    COMPANY: 'company',
    PUBLISH_REQUEST: 'publishRequest',
    SECTION_INFO: 'section-info',
    SECTION_LIST: 'section-list',
    IS_ADMIN_VIEW: 'admin-view',
    PROFILE: 'profile'
};
export const appName = 'TheIndianDev - DEMO';
export const USER_ROLE = {
    INDIVIDUAL: "INDIVIDUAL",
    BUSINESS: "BUSINESS",
    COMPANY: "COMPANY"
};
