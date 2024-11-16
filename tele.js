fetch("https://comm-bus-api.public.prod.myninja.ai/v1/messages/", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-GB,en;q=0.9,en-US;q=0.8",
    "authorization": "Bearer eyJraWQiOiIrQjcwR1FsejR5NGJaY3RWVjFnSzM5WXM1S09ESVZJQVhsVHB4XC9NNmZDTT0iLCJhbGciOiJSUzI1NiJ9.eyJjdXN0b206bmluamFfdXNlcl9pZCI6IjE5OGI5NDAwLTAwNTEtNGRkNi1hZjdkLTY4YmE1ZDEyZWI4NiIsInN1YiI6ImI3Zjc0MzBiLTVkOTctNGNlYi04ZDEzLTVkN2U3ZmZkMWUwMCIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy13ZXN0LTIuYW1hem9uYXdzLmNvbVwvdXMtd2VzdC0yX3lLcEZLYU5vUCIsInZlcnNpb24iOjIsImNsaWVudF9pZCI6IjM5a2tmZ2pvMnZsMWFwZ2l0bGRzdHVoY3VqIiwib3JpZ2luX2p0aSI6IjFjODI2Y2U4LTdmNmItNDg0NS1iZTFjLTk4ZjhlODJkYWJiNyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4gb3BlbmlkIHByb2ZpbGUgZW1haWwiLCJhdXRoX3RpbWUiOjE3MzE3NzA3NjQsImV4cCI6MTczMTc3NDM2NCwiaWF0IjoxNzMxNzcwNzY0LCJqdGkiOiJhYWQ3M2QwOS0xNDhjLTQzZTUtOTAzNy1mNmU3ZWYwM2QyMGMiLCJ1c2VybmFtZSI6IlBsYWluXzgxMWZlOTRlLTZhZjctNDhlMy1hMThjLTA2ZTk2MWViMWU0ZiJ9.W3NCJCwJhxKxWMTXGibv7I34VQso7-nGvRc7ZblwE3-PJYgDjMZWa_JZKk21KF-8QtzuL5Yl-292xb7PW7t6cOYtamX9NeEfO3XXefdo-GXUn4GpG2FPZTIj7EizPwwffeJfgon2cpays_oIyw4NBjaNvCzL8gWKIQkl3_Z7lyBarLoa1xArppFBzox-fa4u1IinwpGa0hQExUg-eCi1oyot5ihUepOUChvsoqJHipE_b3hGW0JGF8wIHbZPNZm3cPWOhrrmJEHwxKrZYCIIo0SwY-E6oKOm6hU-rRlONu0RQ6Mio-20ugntmHiV4ESJgnE8ODA3LxTrNgcgfvPx-w",
    "content-type": "application/json",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Chromium\";v=\"130\", \"Microsoft Edge\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "x-ninja-event-id": "eafec7d6-bea0-4c54-be2f-7c36a2c9fefc",
    "Referer": "https://myninja.ai/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"event_type\":\"new_message\",\"user_id\":\"198b9400-0051-4dd6-af7d-68ba5d12eb86\",\"channel\":[\"ce\"],\"payload\":\"{\\\"conversation_id\\\":\\\"\\\",\\\"user_id\\\":\\\"198b9400-0051-4dd6-af7d-68ba5d12eb86\\\",\\\"from_user_id\\\":\\\"198b9400-0051-4dd6-af7d-68ba5d12eb86\\\",\\\"to_user_id\\\":\\\"14a83bbd-7652-4102-ab77-c24ad39701a1\\\",\\\"channel\\\":\\\"web_app\\\",\\\"role\\\":\\\"user\\\",\\\"content\\\":\\\"hi how are you\\\",\\\"is_read\\\":false,\\\"tag\\\":\\\"CONVERSATION\\\",\\\"timestamp\\\":\\\"2024-11-16T15:27:32.752Z\\\",\\\"persona\\\":{\\\"avatar_id\\\":\\\"BP_Atlas_00\\\",\\\"communication_tone_id\\\":\\\"Professional_And_Formal\\\",\\\"conversational_style\\\":3},\\\"payload_list\\\":[{\\\"payload_type\\\":\\\"text\\\",\\\"content\\\":\\\"hi how are you\\\"}]}\",\"streaming\":true,\"research_streaming\":true}",
  "method": "POST"
}).then(res=>res.json()).then(res=>console.log(res))