function isiPiringKu(makananPokok, sayuran, laukPauk, buahBuahan) {
  //process
  const menu = `"Hari ini saya makan ${makananPokok} pakai ${sayuran} lalu ${laukPauk} serta ${buahBuahan}`;

  // nilai balikan
  return menu;
}

// call the function
console.log(
  isiPiringKu(
    "Nasi,",
    "Tumis Brokoli,",
    "Telur Rebus dan Tahu Kukus,",
    "2 Buah Jeruk."
  )
);
