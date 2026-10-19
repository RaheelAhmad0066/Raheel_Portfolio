"use client";
import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Comprehensive real Flutter & Dart coding lines
    const codeLines = [
      'import "package:flutter/material.dart";',
      'import "package:flutter_bloc/flutter_bloc.dart";',
      'class AppEngine extends StatefulWidget {',
      '  @override',
      '  State<AppEngine> createState() => _State();',
      '}',
      'final authBloc = context.read<AuthBloc>();',
      'Future<void> fetchUserData() async {',
      '  final res = await http.get(Uri.parse(api));',
      '  final data = jsonDecode(res.body);',
      '  emit(AuthenticatedState(user: data));',
      '}',
      'Widget build(BuildContext context) {',
      '  return Scaffold(backgroundColor: Colors.white,',
      '    body: BlocConsumer<UserBloc, UserState>(',
      '      builder: (ctx, state) => ListView.builder(',
      '        itemCount: state.orders.length,',
      '        itemBuilder: (_, i) => OrderTile(i),',
      '      ),',
      '    ),',
      '  );',
      '}',
      'AnimationController controller = AnimationController();',
      'FirebaseFirestore.instance.collection("chats").snapshots();',
      'GetIt.instance.registerSingleton<ApiClient>(ApiClient());',
      'StreamBuilder<QuerySnapshot>(stream: stream)',
    ];

    interface CodeColumn {
      x: number;
      y: number;
      speed: number;
      lines: string[];
      currentLineIndex: number;
      charIndex: number;
      opacity: number;
      fontSize: number;
    }

    let columns: CodeColumn[] = [];

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initColumns();
    };

    const initColumns = () => {
      columns = [];
      const colWidth = 240;
      const numCols = Math.max(Math.floor(canvas.width / colWidth), 4);
      
      for (let i = 0; i < numCols; i++) {
        columns.push({
          x: i * colWidth + Math.random() * 40 + 10,
          y: Math.random() * canvas.height,
          speed: 0.35 + Math.random() * 0.35,
          lines: codeLines,
          currentLineIndex: Math.floor(Math.random() * codeLines.length),
          charIndex: 0,
          opacity: 0.18 + Math.random() * 0.12, // 18% - 30% visibility: crystal clear but subtle enough
          fontSize: 12.5,
        });
      }
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < columns.length; i++) {
        const col = columns[i];
        ctx.font = `${col.fontSize}px "Fira Code", monospace`;
        
        // Render 5 consecutive lines to simulate an open code file floating
        for (let l = 0; l < 6; l++) {
          const lineIdx = (col.currentLineIndex + l) % col.lines.length;
          const lineText = col.lines[lineIdx];
          const lineY = col.y + l * 20;

          if (lineY > 0 && lineY < canvas.height + 40) {
            // Gradient syntax coloring style
            if (lineText.includes('class') || lineText.includes('return') || lineText.includes('import')) {
              ctx.fillStyle = `rgba(147, 51, 234, ${col.opacity * 1.3})`; // Purple keywords
            } else if (lineText.includes('"') || lineText.includes("'")) {
              ctx.fillStyle = `rgba(16, 185, 129, ${col.opacity * 1.2})`; // Emerald strings
            } else if (lineText.includes('Widget') || lineText.includes('Future') || lineText.includes('State')) {
              ctx.fillStyle = `rgba(79, 70, 229, ${col.opacity * 1.2})`; // Indigo types
            } else {
              ctx.fillStyle = `rgba(100, 116, 139, ${col.opacity})`; // Slate normal
            }

            ctx.fillText(lineText, col.x, lineY);
          }
        }

        // Float upward
        col.y -= col.speed;

        // Reset when scrolled past top
        if (col.y < -150) {
          col.y = canvas.height + Math.random() * 80;
          col.currentLineIndex = Math.floor(Math.random() * col.lines.length);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
    />
  );
}
