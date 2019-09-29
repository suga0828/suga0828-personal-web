exports.sendEmail = async (snap, context) => {
  const email = snap.email;
  console.log(`Se acaba de agregar el correo: ${email}`);
};
