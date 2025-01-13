const corsOptions = {
  origin: ["http://localhost:3000", "https://example.com"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

export default corsOptions;
