import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final _input_URL = TextEditingController();
  String storing_url = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("URL_Shortener"),
      ),
      body: Padding(
        padding: const EdgeInsets.fromLTRB(20, 10, 20, 50),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            Expanded(
              child: Container(
                child: Center(
                  child: Text(storing_url, style: TextStyle(fontSize: 35)),
                ),
              ),
            ),
            Card(
              child: TextField(
                controller: _input_URL, // removed the const keyword
                decoration: InputDecoration(
                    hintText: 'Enter the URL',
                    border: OutlineInputBorder(),
                    suffixIcon: IconButton(
                        onPressed: () {
                          _input_URL.clear();
                        },
                        icon: const Icon(Icons.clear))),
              ),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                ElevatedButton(
                  onPressed: () {
                    setState(() {
                      storing_url = _input_URL.text;
                    });
                  },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.deepPurple,
                  ),
                  child: const Text("Short it!!"),
                ),
                ElevatedButton(
                  onPressed: () {
                    setState(() {
                      storing_url = _input_URL.text;
                    });
                  },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.deepPurple,
                  ),
                  child: const Text("Copy"),
                ),
                ElevatedButton(
                  onPressed: () {
                    setState(() {
                      storing_url = _input_URL.text;
                    });
                  },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.deepPurple,
                  ),
                  child: const Text("Share"),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
