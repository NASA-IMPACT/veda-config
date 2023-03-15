#!/bin/bash

git submodule update --init --recursive

./.veda/setup

cp .env.local-sample .env.local
