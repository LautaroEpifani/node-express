CREATE TABLE bookings(
    id INT AUTO_INCREMENT PRIMARY KEY,
    guest VARCHAR(50) NOT NULL,
    room_id INT(2),
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    order_date DATETIME NOT NULL,
    special_request TEXT NOT NULL,
    `status` ENUM('Check In','Check Out', 'In Progress') NOT NULL,
    room_number INT(2) NOT NULL,
    color VARCHAR(1),
    bgrColor VARCHAR(1)
);

CREATE TABLE rooms(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    images TEXT NOT NULL,
    room_type VARCHAR(20) NOT NULL,
    room_number INT(2) NOT NULL,
    amenities TEXT NOT NULL,
    price INT(3) NOT NULL,
    discount INT(3) NOT NULL,
    offer VARCHAR(3) NOT NULL,
    offer_price INT(3) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    cancellation  TEXT NOT NULL,
    `status`   ENUM('Available','Booked') NOT NULL
);

CREATE TABLE messages(
    id INT AUTO_INCREMENT PRIMARY KEY,
    `date` DATE NOT NULL,
    `hour` DATETIME NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    email VARCHAR(70) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    `subject` VARCHAR(30) NOT NULL,
    comment TEXT NOT NULL
);

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_name VARCHAR(50) NOT NULL,
    `image` TEXT NOT NULL,
    email VARCHAR(70) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `start_date` DATE NOT NULL,
    `description` VARCHAR(255),
    contact VARCHAR(20) NOT NULL,
    `status`  ENUM('Active','Inactive') NOT NULL,
    position  VARCHAR(20) NOT NULL
);
