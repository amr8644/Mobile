import 'package:flut/screens/Login.dart';
import 'package:flutter/material.dart';

Route<dynamic> generateRoute(RouteSettings settings) {
  switch (settings.name) {
    case LoginScreen.routename:
      return MaterialPageRoute(
        builder: (context) => LoginScreen(),
      );
    default:
      return MaterialPageRoute(
        builder: (context) => const Scaffold(
          body: Text("Hello "),
        ),
      );
  }
}
