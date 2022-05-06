/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
api.ts (c) 2022
Desc: description
Created:  2022-05-06T19:20:48.902Z
Modified: 2022-05-06T21:21:21.218Z
*/

import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})
