const homeUserSchema = new mongoose.Schema({
    name: String
  });
  const HomeUser = mongoose.model('HomeUser', homeUserSchema);