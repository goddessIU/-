void display();

void init() {
    glClearColor(1, 1, 0, 1);
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_RGB);

    glutInitWindowPosition(200, 200);
    glutInitWindowSize(500, 500);

    

    glutCreateWindow("Window 1");

    glutDisplayFunc(display);
    init();

    glutMainLoop();
}

void display() {
    glClear(GL_COLOR_BUFFER_BIT);
    glLoadIdentity();

    glFlush();
}