
curl "https://serene-sea-61439.herokuapp.com/sign-out"\
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"

echo
