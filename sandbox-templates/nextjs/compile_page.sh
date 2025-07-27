#!/bin/bash

function ping_server() {
	counter=0
	response=$(curl -k -s -o /dev/null -w "%{http_code}" "https://localhost:3000")
	while [[ ${response} -ne 200 ]]; do
	  let counter++
	  if  (( counter % 20 == 0 )); then
        echo "Waiting for server to start..."
        sleep 0.1
      fi
	  response=$(curl -k -s -o /dev/null -w "%{http_code}" "https://localhost:3000")
	done
}

ping_server &
cd /home/user && node server.js