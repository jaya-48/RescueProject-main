// src/app/sos/sosService.js

export const sendSosMessage = async () => {
    // Simulate a successful backend response
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'John Doe',
          emergencyType: 'Flood',
          location: 'Downtown',
          status: 'Help requested'
        });
      }, 1000);
    });
  };
  