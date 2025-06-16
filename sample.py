import http.client
import json
import base64
import time

# Step 1: Prepare source code and input
source_code = r"""
#include <stdio.h>

int main(void) {
    char name[100];
    scanf("%s", name);
    printf("hello, %s\n", name);
    return 0;
}
"""

stdin_input = "Judge0"

# Step 2: Encode in Base64
encoded_code = base64.b64encode(source_code.encode()).decode()
encoded_input = base64.b64encode(stdin_input.encode()).decode()

# Step 3: Prepare the body
body = json.dumps({
    "language_id": 52,  # 52 = C (GCC)
    "source_code": encoded_code,
    "stdin": encoded_input
})

# Step 4: Setup connection and headers
conn = http.client.HTTPSConnection("judge0-ce.p.rapidapi.com")
headers = {
    'x-rapidapi-key': "356c78a609msh3353851068fd771p15cc9cjsnfbe8c03110a6",
    'x-rapidapi-host': "judge0-ce.p.rapidapi.com",
    'Content-Type': "application/json"
}

# Step 5: Make the POST request to submit code
conn.request("POST", "/submissions?base64_encoded=true&wait=false&fields=*", body, headers)
res = conn.getresponse()
response_data = res.read()
submission_response = json.loads(response_data)

# Step 6: Extract token
token = submission_response.get("token")
print("Submission token:", token)

# Step 7: Poll for result using the token
result = None
while True:
    conn.request("GET", f"/submissions/{token}?base64_encoded=true&fields=*", headers=headers)
    res = conn.getresponse()
    result_data = json.loads(res.read())

    status = result_data.get("status", {}).get("description")
    if status == "In Queue" or status == "Processing":
        print("Waiting for result...")
        time.sleep(1)
    else:
        result = result_data
        break

# Step 8: Decode output
if result:
    output = base64.b64decode(result.get("stdout", "")).decode() if result.get("stdout") else ""
    stderr = base64.b64decode(result.get("stderr", "")).decode() if result.get("stderr") else ""
    compile_output = base64.b64decode(result.get("compile_output", "")).decode() if result.get("compile_output") else ""

    print("\n--- Output ---")
    print(output)
    if stderr:
        print("\n--- Error ---")
        print(stderr)
    if compile_output:
        print("\n--- Compile Output ---")
        print(compile_output)
