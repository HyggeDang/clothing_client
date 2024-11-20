import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
<<<<<<< HEAD
  publicRoutes: ["/:path*"]
=======
  publicRoutes: ["/api/:path*"]
>>>>>>> 2c1a2c848278c797693461797c9ba2650834301a
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
<<<<<<< HEAD
};



=======
};
>>>>>>> 2c1a2c848278c797693461797c9ba2650834301a
