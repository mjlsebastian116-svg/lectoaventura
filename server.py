from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


HOST = "127.0.0.1"
PORT = 8765


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(Path(__file__).parent), **kwargs)


def main() -> None:
    server = ThreadingHTTPServer((HOST, PORT), Handler)
    print(f"LectoAventura disponible en http://{HOST}:{PORT}")
    print("Presiona Ctrl+C para detener el servidor.")
    server.serve_forever()


if __name__ == "__main__":
    main()
