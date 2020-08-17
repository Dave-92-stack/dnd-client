curl "http://localhost:4741/books" \
  --include \
  --request POST \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "Adventure Book": {
      "title": "'"${TITLE}"'",
      "edition": "'"${EDITION}"'",
      "description": "'"${DESCRIPTION}"'"
    }
  }'

echo
