"use server"

import { revalidatePath } from "next/cache";

export async function addRequest(data) {
    let  response = await fetch(`${process.env.BASE_URI}api/requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error("Failed to submit request.");
    }
  
    return await response.json();
  }
  
  export async function getRequest(status) {
    let requests = await fetch(
      `${process.env.BASE_URI}api/requests?status=${status ? status : ""}`
    );
    requests = requests.json();
  
    return requests;
  }
  
  export async function getSingleRequest(id) {
    let request = await fetch(`${process.env.BASE_URI}api/requests/${id}`);
    request = request.json();
  
    return request;
  }
  
  export async function updateRequest(id, status) {
    let requests = await fetch(`${process.env.BASE_URI}api/requests`, {
      method: "PUT",
      body: JSON.stringify({ id, status }),
    });
    requests = requests.json();
    revalidatePath("/admin/requests");
    return requests;
  }

