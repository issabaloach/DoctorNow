export const categories = [
    "Allergist/Immunologist",
    "Anesthesiologist",
    "Cardiologist",
    "Dermatologist",
    "Endocrinologist",
    "Gastroenterologist",
    "Geriatrician",
    "Hematologist",
    "Infectious Disease Specialist",
    "Internal Medicine Specialist",
    "Nephrologist",
    "Neurologist",
    "Obstetrician/Gynecologist (OB/GYN)",
    "Oncologist",
    "Ophthalmologist",
    "Orthopedic Surgeon",
    "Otolaryngologist (ENT Specialist)",
    "Pediatrician",
    "Plastic Surgeon",
    "Psychiatrist",
    "Pulmonologist",
    "Radiologist",
    "Rheumatologist",
    "Sports Medicine Specialist",
    "Surgeon (General)",
    "Urologist",
    "Vascular Surgeon",
  ];
  
  export const doctors = [
    {
      name: "Dr. Ayesha Khan",
      appointmentTime: "9:00 AM - 12:00 PM",
      fees: 150,
      category: "Cardiologist",
      hospital: "Karachi Heart Hospital",
      gender: "Female",
      id: 1,
    },
    {
      name: "Dr. Ahmed Ali",
      appointmentTime: "2:00 PM - 6:00 PM",
      fees: 200,
      category: "Dermatologist",
      hospital: "Skin Care Clinic Lahore",
      gender: "Male",
      id: 2,
    },
    {
      name: "Dr. Sara Malik",
      appointmentTime: "10:00 AM - 1:00 PM",
      fees: 180,
      category: "Pediatrician",
      hospital: "Children's Medical Center Islamabad",
      gender: "Female",
      id: 3,
    },
    {
      name: "Dr. Imran Siddiqui",
      appointmentTime: "11:00 AM - 3:00 PM",
      fees: 250,
      category: "Orthopedic Surgeon",
      hospital: "OrthoCare Hospital Lahore",
      gender: "Male",
      id: 4,
    },
    {
      name: "Dr. Fatima Raza",
      appointmentTime: "3:00 PM - 7:00 PM",
      fees: 220,
      category: "Psychiatrist",
      hospital: "Mental Wellness Center Karachi",
      gender: "Female",
      id: 5,
    },
    {
      name: "Dr. Hassan Javed",
      appointmentTime: "8:00 AM - 12:00 PM",
      fees: 300,
      category: "Oncologist",
      hospital: "Cancer Care Hospital Lahore",
      gender: "Male",
      id: 6,
    },
    {
      name: "Dr. Noor Fatima",
      appointmentTime: "1:00 PM - 4:00 PM",
      fees: 170,
      category: "Allergist/Immunologist",
      hospital: "Allergy Relief Center Islamabad",
      gender: "Female",
      id: 7,
    },
    {
      name: "Dr. Usman Shah",
      appointmentTime: "2:00 PM - 5:00 PM",
      fees: 160,
      category: "Gastroenterologist",
      hospital: "Digestive Health Clinic Karachi",
      gender: "Male",
      id: 8,
    },
    {
      name: "Dr. Anam Qureshi",
      appointmentTime: "9:00 AM - 12:00 PM",
      fees: 190,
      category: "Ophthalmologist",
      hospital: "Vision Care Institute Lahore",
      gender: "Female",
      id: 9,
    },
    {
      name: "Dr. Tariq Khan",
      appointmentTime: "10:00 AM - 2:00 PM",
      fees: 210,
      category: "Urologist",
      hospital: "Men's Health Clinic Karachi",
      gender: "Male",
      id: 10,
    },
    {
      name: "Dr. Maryam Abbas",
      appointmentTime: "1:00 PM - 6:00 PM",
      fees: 180,
      category: "Rheumatologist",
      hospital: "Arthritis Relief Center Islamabad",
      gender: "Female",
      id: 11,
    },
    {
      name: "Dr. Asad Iqbal",
      appointmentTime: "8:00 AM - 12:00 PM",
      fees: 270,
      category: "Pulmonologist",
      hospital: "Lung Care Hospital Karachi",
      gender: "Male",
      id: 12,
    },
  ];
  
  export const currentUser = {
    name: "Bilal",
    role: "doctor",
    email: "bilal@gmail.com",
  };
  
  export const appointments = [
    {
      user: {
        name: "Ali Hassan",
        email: "ali.hassan@example.com",
      },
      appointmentTime: "9:30 AM",
      status: "Confirmed",
      appointmentDate: "2024-11-01",
      doctor: {
        name: "Dr. Ayesha Khan",
        hospital: "Karachi Heart Hospital",
      },
    },
    {
      user: {
        name: "Amna Tariq",
        email: "amna.tariq@example.com",
      },
      appointmentTime: "2:15 PM",
      status: "Pending",
      appointmentDate: "2024-11-03",
      doctor: {
        name: "Dr. Ahmed Ali",
        hospital: "Skin Care Clinic Lahore",
      },
    },
    {
      user: {
        name: "Hamza Ahmed",
        email: "hamza.ahmed@example.com",
      },
      appointmentTime: "10:45 AM",
      status: "Cancelled",
      appointmentDate: "2024-11-05",
      doctor: {
        name: "Dr. Sara Malik",
        hospital: "Children's Medical Center Islamabad",
      },
    },
    {
      user: {
        name: "Sana Iqbal",
        email: "sana.iqbal@example.com",
      },
      appointmentTime: "11:30 AM",
      status: "Confirmed",
      appointmentDate: "2024-11-08",
      doctor: {
        name: "Dr. Imran Siddiqui",
        hospital: "OrthoCare Hospital Lahore",
      },
    },
    {
      user: {
        name: "Danish Farooq",
        email: "danish.farooq@example.com",
      },
      appointmentTime: "3:00 PM",
      status: "Pending",
      appointmentDate: "2024-11-09",
      doctor: {
        name: "Dr. Fatima Raza",
        hospital: "Mental Wellness Center Karachi",
      },
    },
    {
      user: {
        name: "Nida Ali",
        email: "nida.ali@example.com",
      },
      appointmentTime: "8:15 AM",
      status: "Confirmed",
      appointmentDate: "2024-11-12",
      doctor: {
        name: "Dr. Hassan Javed",
        hospital: "Cancer Care Hospital Lahore",
      },
    },
    {
      user: {
        name: "Omer Siddiqui",
        email: "omer.siddiqui@example.com",
      },
      appointmentTime: "2:30 PM",
      status: "Confirmed",
      appointmentDate: "2024-11-15",
      doctor: {
        name: "Dr. Noor Fatima",
        hospital: "Allergy Relief Center Islamabad",
      },
    },
    {
      user: {
        name: "Faisal Malik",
        email: "faisal.malik@example.com",
      },
      appointmentTime: "9:45 AM",
      status: "Cancelled",
      appointmentDate: "2024-11-18",
      doctor: {
        name: "Dr. Anam Qureshi",
        hospital: "Vision Care Institute Lahore",
      },
    },
    {
      user: {
        name: "Zainab Raza",
        email: "zainab.raza@example.com",
      },
      appointmentTime: "1:00 PM",
      status: "Pending",
      appointmentDate: "2024-11-20",
      doctor: {
        name: "Dr. Tariq Khan",
        hospital: "Men's Health Clinic Karachi",
      },
    },
    {
      user: {
        name: "Saad Ahmed",
        email: "saad.ahmed@example.com",
      },
      appointmentTime: "11:00 AM",
      status: "Confirmed",
      appointmentDate: "2024-11-23",
      doctor: {
        name: "Dr. Maryam Abbas",
        hospital: "Arthritis Relief Center Islamabad",
      },
    },
  ];
  