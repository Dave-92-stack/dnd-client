curl "http://localhost:4741/advbooks/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "Adventure Book": {
      "title": "'"${TITLE}"'",
      "edition": "'"${EDITION}"'",
      "description": "'"${DESCRIPTION}"'",
    }
  }'

echo
