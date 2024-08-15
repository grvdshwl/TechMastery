//* https://www.youtube.com/watch?v=CUwt9_l0DOg
//* https://app.diagrams.net/#G10sPxUFdS08-mEdBATF9UCy3yRmATEQ5Q#%7B%22pageId%22%3A%22rZmAFTunxOZO1n4Oljmz%22%7D

//* Requirements:

//* Functional Requirements:
//* 1. Send Notification
//*    The system should be capable of sending notifications to users.
//* 2. Pluggable
//*    The notification service should be extensible to support mobile, email, IVRS, Whatsapp or push notifications for future requirements.
//* 3. SaaS Product: Rate Limiting
//*    Implement rate limiting for promotional notifications to control the volume and frequency of messages sent.
//*    Transactional notifications (e.g., OTPs) should be exempt from rate limiting.
//* 4. Prioritization
//*    Notifications should be prioritized based on their type: transactional notifications (e.g., OTP) should be treated with high priority, while promotional notifications should be treated with low priority.

//* Non-Functional Requirements:
//* 1. Availability
//*    The system should be highly available, ensuring that notifications can be sent and received at all times.
//* 2. Scalability
//*    The system should be able to handle an increasing number of notifications and users without performance degradation.
