import { TestBed } from "@angular/core/testing";
import { TeamSelectionService } from "./team-selection.service";
import { PlayerModel } from "@features/team/models";
import { PlayerRoleEnum } from "@features/team/enums";
import { NotificationsService } from "@features/notifications/services";

describe("TeamSelectionService", () => {
  let service: TeamSelectionService;
  let notificationsServiceMock: jest.Mocked<NotificationsService>;

  const mockPlayer = (overrides: Partial<PlayerModel> = {}): PlayerModel => ({
    id: "test-player",
    name: "Test Player",
    type: PlayerRoleEnum.Batting,
    battingSkill: 85,
    bowlingSkill: 20,
    fieldingSkill: 75,
    ...overrides,
  });

  beforeEach(() => {
    notificationsServiceMock = {
      showError: jest.fn(),
    } as unknown as jest.Mocked<NotificationsService>;

    TestBed.configureTestingModule({
      providers: [TeamSelectionService, { provide: NotificationsService, useValue: notificationsServiceMock }],
    });

    service = TestBed.inject(TeamSelectionService);
  });

  it("should add a player to the selection", () => {
    const player = mockPlayer({ id: "p1" });
    service.selectPlayer(player);
    expect(service.selectedPlayers()).toHaveLength(1);
    expect(service.selectedPlayers()[0].id).toBe("p1");
  });

  it("should not add the same player twice", () => {
    const player = mockPlayer({ id: "p1" });
    service.selectPlayer(player);
    service.selectPlayer(player);
    expect(service.selectedPlayers()).toHaveLength(1);
  });

  it("should call showError if total player count exceeds 11", () => {
    const roles: PlayerRoleEnum[] = [
      PlayerRoleEnum.Batting,
      PlayerRoleEnum.Batting,
      PlayerRoleEnum.Bowling,
      PlayerRoleEnum.Bowling,
      PlayerRoleEnum.Bowling,
      PlayerRoleEnum.WicketKeeper,
      PlayerRoleEnum.AllRounder,
      PlayerRoleEnum.AllRounder,
      PlayerRoleEnum.AllRounder,
      PlayerRoleEnum.AllRounder,
      PlayerRoleEnum.Batting,
    ];

    roles.forEach((role, i) => {
      service.selectPlayer(mockPlayer({ id: `p${i}`, type: role }));
    });

    // Add the 12th player to exceed the limit
    service.selectPlayer(mockPlayer({ id: "p12", type: PlayerRoleEnum.Bowling }));

    expect(notificationsServiceMock.showError).toHaveBeenCalledWith("Only 11 players are allowed in a team");
    expect(service.selectedPlayers()).toHaveLength(11);
  });

  it("should call showError if more than 6 batsmen are selected", () => {
    for (let i = 0; i < 6; i++) {
      service.selectPlayer(mockPlayer({ id: `b${i}`, type: PlayerRoleEnum.Batting }));
    }
    service.selectPlayer(mockPlayer({ id: "b6", type: PlayerRoleEnum.Batting }));
    expect(notificationsServiceMock.showError).toHaveBeenCalledWith("Batsmen can not be more than 6");
  });

  it("should remove a player by id", () => {
    const player = mockPlayer({ id: "p-remove" });
    service.selectPlayer(player);
    service.removePlayer("p-remove");
    expect(service.selectedPlayers()).toHaveLength(0);
  });

  it("should return true if player is selected", () => {
    const player = mockPlayer({ id: "p-checked" });
    service.selectPlayer(player);
    expect(service.isSelected("p-checked")).toBe(true);
  });

  it("should return false if player is not selected", () => {
    expect(service.isSelected("not-selected")).toBe(false);
  });

  it("should call showError if combined batsmen + bowlers exceed 6", () => {
    const batsmen = Array.from({ length: 3 }, (_, i) => mockPlayer({ id: `b${i}`, type: PlayerRoleEnum.Batting }));
    const bowlers = Array.from({ length: 3 }, (_, i) => mockPlayer({ id: `bl${i}`, type: PlayerRoleEnum.Bowling }));

    [...batsmen, ...bowlers].forEach((player) => service.selectPlayer(player));

    service.selectPlayer(mockPlayer({ id: "bl-extra", type: PlayerRoleEnum.Bowling }));

    expect(notificationsServiceMock.showError).toHaveBeenCalledWith("Batsmen and Bowlers can not be more than 6");
  });

  it("should call showError if bowlers exceed 6", () => {
    for (let i = 0; i < 6; i++) {
      service.selectPlayer(mockPlayer({ id: `bl${i}`, type: PlayerRoleEnum.Bowling }));
    }
    service.selectPlayer(mockPlayer({ id: "bl6", type: PlayerRoleEnum.Bowling }));

    expect(notificationsServiceMock.showError).toHaveBeenCalledWith("Bowlers can not be more than 6");
  });

  it("should call showError if more than 1 wicket keeper is selected", () => {
    service.selectPlayer(mockPlayer({ id: "wk1", type: PlayerRoleEnum.WicketKeeper }));
    service.selectPlayer(mockPlayer({ id: "wk2", type: PlayerRoleEnum.WicketKeeper }));

    expect(notificationsServiceMock.showError).toHaveBeenCalledWith("Wicket Keeper can not be more than 1");
  });

  it("should call showError if all-rounders exceed 4", () => {
    for (let i = 0; i < 4; i++) {
      service.selectPlayer(mockPlayer({ id: `ar${i}`, type: PlayerRoleEnum.AllRounder }));
    }
    service.selectPlayer(mockPlayer({ id: "ar4", type: PlayerRoleEnum.AllRounder }));

    expect(notificationsServiceMock.showError).toHaveBeenCalledWith("All Rounders can not be more than 4");
  });
});
