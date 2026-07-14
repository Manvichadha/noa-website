"use client";

import React, { useState, useEffect } from 'react';

const ClientsDashboard = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Fetch clients from Supabase here
    // For now, using placeholder data
    setClients([
      { id: 1, subdomain: 'client1', business_name: 'Client 1', is_active: true },
      { id: 2, subdomain: 'client2', business_name: 'Client 2', is_active: false },
    ]);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Clients Dashboard</h1>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Subdomain</th>
            <th className="px-4 py-2">Business Name</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td className="border px-4 py-2">{client.subdomain}</td>
              <td className="border px-4 py-2">{client.business_name}</td>
              <td className="border px-4 py-2">{client.is_active ? 'Active' : 'Inactive'}</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">Edit</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">{client.is_active ? 'Deactivate' : 'Activate'}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">Add New Client</button>
    </div>
  );
};

export default ClientsDashboard;