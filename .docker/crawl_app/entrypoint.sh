#!/bin/sh

if [ ! -e /var/www/.env ]; then
    cp /var/www/.env.example /var/www/.env
fi

if [ ! -e node_modules ]; then
  yarn install
fi

# Run the CMD
exec "$@"