import requests

def call_link(url):
	try:
		response = requests.get(url)
		if response.status_code == 200:
			return response.text
		else:
			return f"Request failed with status code: {response.status_code}"
	except requests.exceptions.RequestException as e:
		return f"An error occurred: {e}"

# Example usage

def main():
	
	while True:
		url = "https://0ijq1i6sp1.execute-api.us-east-1.amazonaws.com/dev/stream"
		output = call_link(url)
		print(output)

main()
	