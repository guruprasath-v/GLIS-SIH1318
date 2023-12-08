import json

# Load the GeoJSON file
with open('india.geojson', 'r') as f:
    data = json.load(f)

# Iterate over the features and add an ID to each one
for i, feature in enumerate(data['features']):
    feature['id'] = i

# Save the modified GeoJSON back to a file
with open('india.geojson', 'w') as f:
    json.dump(data, f, indent=2)