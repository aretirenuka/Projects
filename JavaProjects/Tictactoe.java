import java.util.Scanner;

public class Tictactoe {
    private static final int BOARD_SIZE = 3;
    private static final char EMPTY_CELL = ' ';
    private static char[][] board = new char[BOARD_SIZE][BOARD_SIZE];
    private static char currentPlayer = 'X';

    public static void main(String[] args) {
        initializeBoard();
        displayBoard();

        while (true) {
            playMove();
            displayBoard();
            if (checkForWin() || isBoardFull()) {
                break;
            }
            switchPlayer();
        }

        if (checkForWin()) {
            System.out.println("Player " + currentPlayer + " wins!");
        } else {
            System.out.println("It's a draw!");
        }
    }

    private static void initializeBoard() {
        for (int i = 0; i < BOARD_SIZE; i++) {
            for (int j = 0; j < BOARD_SIZE; j++) {
                board[i][j] = EMPTY_CELL;
            }
        }
    }

    private static void displayBoard() {
        System.out.println("-------------");
        for (int i = 0; i < BOARD_SIZE; i++) {
            System.out.print("| ");
            for (int j = 0; j < BOARD_SIZE; j++) {
                System.out.print(board[i][j] + " | ");
            }
            System.out.println();
            System.out.println("-------------");
        }
    }

    private static void playMove() {
        Scanner scanner = new Scanner(System.in);
        int row, col;

        do {
            System.out.println("Player " + currentPlayer + ", enter row (1-3) and column (1-3): ");
            row = scanner.nextInt() - 1;
            col = scanner.nextInt() - 1;
        } while (!isValidMove(row, col));

        board[row][col] = currentPlayer;
    }

    private static boolean isValidMove(int row, int col) {
        if (row < 0 || row >= BOARD_SIZE || col < 0 || col >= BOARD_SIZE) {
            System.out.println("Invalid move. Row and column should be between 1 and 3.");
            return false;
        }
        if (board[row][col] != EMPTY_CELL) {
            System.out.println("Cell already taken. Try again.");
            return false;
        }
        return true;
    }

    private static void switchPlayer() {
        currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
    }

    private static boolean checkForWin() {
        return checkRowsForWin() || checkColumnsForWin() || checkDiagonalsForWin();
    }

    private static boolean checkRowsForWin() {
        for (int i = 0; i < BOARD_SIZE; i++) {
            if (checkCellsEqual(board[i][0], board[i][1], board[i][2])) {
                return true;
            }
        }
        return false;
    }

    private static boolean checkColumnsForWin() {
        for (int i = 0; i < BOARD_SIZE; i++) {
            if (checkCellsEqual(board[0][i], board[1][i], board[2][i])) {
                return true;
            }
        }
        return false;
    }

    private static boolean checkDiagonalsForWin() {
        return (checkCellsEqual(board[0][0], board[1][1], board[2][2])
                || checkCellsEqual(board[0][2], board[1][1], board[2][0]));
    }

    private static boolean checkCellsEqual(char c1, char c2, char c3) {
        return c1 != EMPTY_CELL && c1 == c2 && c2 == c3;
    }

    private static boolean isBoardFull() {
        for (int i = 0; i < BOARD_SIZE; i++) {
            for (int j = 0; j < BOARD_SIZE; j++) {
                if (board[i][j] == EMPTY_CELL) {
                    return false;
                }
            }
        }
        return true;
    }
}
