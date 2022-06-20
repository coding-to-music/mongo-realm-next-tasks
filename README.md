# mongo-realm-next-tasks

# 🚀 Javascript full-stack 🚀

https://github.com/coding-to-music/mongo-realm-next-tasks

https://mongo-realm-next-tasks.vercel.app

From / By

## Environment variables:

```java
const { Expo } = require("expo-server-sdk");
let expo = new Expo({ accessToken: context.values.get("expoKey") });

realm-backend/realm_config.json
{
    "config_version": 20210101,
    "app_id": "mongo-realm-next-tasks-qhlli",
    "name": "mongo-realm-next-tasks",
    "location": "US-VA",
    "deployment_model": "GLOBAL",
    "environment": "production"
}

realm-backend/values/expoKey.json
{
    "name": "expoKey",
    "value": "expo",
    "from_secret": true
}

realm-backend/data_sources/mongodb-atlas/config.json
{
    "name": "mongodb-atlas",
    "type": "mongodb-atlas",
    "config": {
      "clusterName": "Cluster0",
      "readPreference": "primary",
      "wireProtocolEnabled": false
    }
  }
```

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/mongo-realm-next-tasks.git
git push -u origin main
```

# Task

## A simple application for creating Tasks

### Created with Next.js, Tailwind, Mongodb
