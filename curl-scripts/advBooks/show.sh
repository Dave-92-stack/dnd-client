curl "http://localhost:4741/plants/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \

echo
