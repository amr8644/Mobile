import 'package:flut/colors.dart';
import 'package:flutter/material.dart';

class ButtonComponent extends StatelessWidget {
  final String text;
  final VoidCallback onPressed;
  const ButtonComponent({
    Key? key,
    required this.text,
    required this.onPressed,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
        onPressed: onPressed,style: ElevatedButton.styleFrom(
          primary: tabColor,
          minimumSize: const Size(double.infinity, 50)
        ),
        child: Text(
          text,
          style: const TextStyle(
            color: Colors.black87,
          ),
        
        )
        );
        
  }
}
